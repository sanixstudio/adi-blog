import Sidebar from '../../sidebar/Sidebar';
import Posts from '../../posts/Posts';
import Header from '../../header/Header';
import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Home
