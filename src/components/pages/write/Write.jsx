import './write.css'
import logo from './images/sf.jpg';

const Write = () => {
  return (
    <div className="write">
      <img src={logo} alt="" />
      <form action="" className="write-form">
        <div className="write-form-group">
          <label htmlFor="" className="file-input">
            <i className="fas fa-plus"></i>
          </label>
          <input 
            type="file" 
            id="fileInput" 
            style={{ display: "none" }} 
          />
          <input 
            type="text" 
            placeholder="Title" 
            className="write-input write-title" 
            autoFocus={true} 
          />
        </div>
        <div className="write-form-group-textarea">
          <textarea 
            placeholder="Tell your story..." 
            type="text" 
            className="write-input write-text">
          </textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  )
}

export default Write
