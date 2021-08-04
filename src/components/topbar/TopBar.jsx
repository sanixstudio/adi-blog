import { Link } from 'react-router-dom'
import './topBar.css'

const TopBar = () => {
  const user = false;
  return (
    <div className="top-bar">
      <div className="top-left">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-pinterest-square"></i>
        <i className="fab fa-instagram-square"></i>
        
      </div>
      <div className="top-center">
        <ul className="nav">
          <li className="nav-item">
            <Link className="link" to="/">home</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/about">about</Link>
          </li>
          <li className="nav-item">
          <Link className="link" to="/contact">contact</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/write">write</Link>
          </li>
          <li className="nav-item">
            {user && "logout"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        { user ? (<img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>) : 
         ( 
          <>
            <Link className="link" to="/Login">Login</Link>
            <Link className="link" to="/Register">Register</Link>
           </>
          )}  
          <i className="search-icon fas fa-search"></i>
      </div>
    </div>
  )
}

export default TopBar
