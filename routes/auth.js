const express = require('express');
const router = express.Router();
const User = require('../models/User')

// @POST REGISTER
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body

  console.log(username, email, password)
  res.send(username, email, password)

  // try {
  //   const newUser = new User()
  //   const user = newUser.save();
  // } catch (err) { res.status.json(err) }
});

// @POST LOGIN
router.post('/', async (req, res) => {
  try {}  catch (err) { res.status.json(err) } 
});

module.exports = router;