import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Video from './components/Video/Video';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (

    <div className="app-wraper">
      <Header />
      <Navbar />
      <div className='appWrapperContent'>
        <Routes>

          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
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
