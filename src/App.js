// local imports
import TopBar from './components/topbar/TopBar';
import Home from './components/pages/home/Home';
import Write from './components/pages/write/Write';
import Single from './components/pages/single/Single';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';

// global style
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Register />
    </div>
  );
}

export default App;
