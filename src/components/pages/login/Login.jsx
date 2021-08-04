import './login.css'

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Your email..." />
        <label>Password</label>
        <input type="password" placeholder="Your password..." />
        <button className="login-button">Login</button>
        <span className="or">OR</span>
      </form>
      <button className="login-register-button">Register</button>
    </div>
  )
}

export default Login
