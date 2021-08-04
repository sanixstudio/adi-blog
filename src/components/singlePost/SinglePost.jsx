import './singlePost.css'

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img 
          src="https://picsum.photos/id/69/1440/1080" 
          className="single-post-img" 
          alt="" 
        />
        <div className="single-post-edit-bar">
          <h1 className="single-post-title">Some fancy title for post</h1>
          <div className="single-post-edit">
            <i className="far single-post-icon fa-edit"></i>
            <i className="far single-post-icon fa-trash-alt"></i>
          </div>
        </div>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>John Doe</b>
          </span>
          <span className="single-post-date">
            1 hour ago
          </span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus 
          iusto consectetur nihil ipsa autem adipisci, laborum dignissimos recusandae? 
          Ipsam, magni. Quam nisi nesciunt incidunt, possimus harum voluptatibus 
          repellat explicabo deleniti repellendus magnam omnis quas commodi? Sapiente 
          amet hic pariatur fugit quis, eaque sed distinctio omnis rem laboriosam! 
          Obcaecati adipisci, deserunt sapiente debitis nulla assumenda distinctio 
          doloribus repudiandae, modi tenetur id delectus hic, rerum eius quaerat 
          dolores excepturi ab? Illum soluta porro incidunt maiores, ad consectetur 
          dolorum nisi distinctio suscipit hic fugit alias reiciendis esse corrupti 
          ipsam mollitia ut eveniet necessitatibus neque natus. Eos illo distinctio 
          ipsam voluptatem tenetur similique ad nostrum et officia facere. Magni 
          quibusdam obcaecati laborum corrupti fugiat, deleniti soluta minima est, 
          optio porro vitae minus totam, repellendus ea! Vitae ad doloremque dolorum 
          obcaecati ea quam fuga corporis, explicabo expedita doloribus atque alias 
          officiis consequatur beatae iusto quisquam aliquid repudiandae adipisci 
          assumenda. Laborum veritatis aperiam odit tempora adipisci!
        </p>
      </div>
    </div>
  )
}

export default SinglePost
