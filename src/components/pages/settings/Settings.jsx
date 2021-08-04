import './settings.css'
import Sidebar from '../../sidebar/Sidebar'

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-updated-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <div className="settings-form">
          <label htmlFor="">Profile Picture</label>
          <div className="settings-pp">
            <img 
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" 
            />
            <label htmlFor="fileInput">
              <i className="far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}} />
          </div>
          <div className="setting-form-elements">
            <label>Username</label>
            <input type="text" placeholder="Jamal Khan" />
            <label>Email</label>
            <input type="email" placeholder="jamal@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="setting-form-button">Update</button>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings