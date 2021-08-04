import './register.css'

const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input type="text" placeholder="Your username..." />
        <label>Email</label>
        <input type="email" placeholder="Your email..." />
        <label>Password</label>
        <input type="password" placeholder="Your password..." />
        <button className="register-button">Register</button>
        <span className="or">OR</span>
      </form>
      <button className="register-login-button">Login</button>
    </div>
  )
}

export default Register
