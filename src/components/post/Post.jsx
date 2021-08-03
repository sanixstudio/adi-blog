import './post.css'

const Post = () => {
  return (
    <div className="post">
      <img src="https://picsum.photos/id/737/1000/700" alt="" />
      <div className="post-info">
        <div className="post-cat">Music</div>
        <div className="post-cat">Life</div>
      </div>
      <span className="post-title">Lorem ipsum dolor sit amet</span>
      <span className="post-date">1 hour ago</span>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, 
        aperiam, aliquid magni voluptate facere assumenda officiis, neque 
        incidunt quae voluptatum aut expedita. Ut atque dicta cupiditate 
        deserunt dignissimos amet velit. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, 
        aperiam, aliquid magni voluptate facere assumenda officiis, neque 
        incidunt quae voluptatum aut expedita. Ut atque dicta cupiditate 
        deserunt dignissimos amet velit.
      </p>
    </div>
  )
}

export default Post
