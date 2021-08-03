import './topbar.css'
const Topbar = () => {
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
          <li className="nav-item">home</li>
          <li className="nav-item">about</li>
          <li className="nav-item">contact</li>
          <li className="nav-item">write</li>
          <li className="nav-item">logout</li>
        </ul>
      </div>
      <div className="top-right">
        <img 
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
          alt="" 
          />
          <i className="search-icon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar
