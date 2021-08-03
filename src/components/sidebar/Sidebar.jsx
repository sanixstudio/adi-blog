import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-item">
        <span className="side-bar-title">about me</span>
        <img src="https://picsum.photos/id/338/500/300" alt="" />
        <p>
          Some time inspiration lie in front of our eyes, we just 
          can't see it for our hearts are full of sadness, regrets and more
        </p>
      </div>
      <div className="side-bar-item">
        <span className="side-bar-title">categories</span>
        <ul className="side-bar-list">
          <li className="side-bar-list-item">Love</li>
          <li className="side-bar-list-item">Fantasy</li>
          <li className="side-bar-list-item">Sport</li>
          <li className="side-bar-list-item">Weather</li>
          <li className="side-bar-list-item">Movies</li>
          <li className="side-bar-list-item">TV-shows</li>
        </ul>
      </div>
      <div className="side-bar-item">
      <span className="side-bar-title">follow us</span>
        <div className="side-bar-social">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-pinterest-square"></i>
          <i className="fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
