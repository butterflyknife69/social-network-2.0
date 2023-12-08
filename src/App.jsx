import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Dialogs from './components/Dialogs/Dialogs'
import Video from './components/Video/Video'



const App = () => {
  return (
    <div className="app-wraper">
      <Header />
      <Navbar />
      <Profile />
      <Dialogs/>
      <News />
      <Music />
      <Video/>
      <Settings />
    </div>
  )
}

export default App;
