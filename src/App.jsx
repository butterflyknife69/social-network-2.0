import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Dialogs from './components/Dialogs/Dialogs';
import Video from './components/Video/Video';
import { Route, Routes } from 'react-router-dom';



const App = (props) => {
  return (

    <div className="app-wraper">
      <Header />
      <Navbar />
      <div className='appWrapperContent'>
        <Routes>

          <Route path="/profile" element={<Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />

          <Route path="/dialogs/*" element={<Dialogs
            dialogsPage={props.state.dialogsPage}
            sendMessage={props.sendMessage}
            updateNewMessageText={props.updateNewMessageText} />} />

          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/video" element={<Video />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
