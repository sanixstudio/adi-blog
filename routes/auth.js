const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

// @POST REGISTER
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body

  try {
    // Check if user already exists to avoid duplication
    const existingUser = await User.findOne({ email })
    existingUser && res.status(409).json({ msg: "User already exists" })

    // Hashing the password
    const salt = await bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(password, salt)

    // Save new User to database with hashed  password
    const userData = new User({
      username, email, password: hashedPassword
    })
    const user = await userData.save();
    res.status(200).json(user)
  } catch (err) { res.status(500).json({ err: err.message }) }
});

// @POST LOGIN
router.post('/login', async (req, res) => {
  try {
    // Check if username exists
    const user = await User.findOne({ username: req.body.username })
    !user && res.status(400).json({ msg: 'Wrong credentials!' })
    
    // check password against hashed password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json({ msg: 'Wrong credentials!' })

    const { password, ...rest } = user._doc

    res.status(200).json(rest)
  }  catch (err) { res.status(500).json({ err: err.message }) } 
})

module.exports = router;