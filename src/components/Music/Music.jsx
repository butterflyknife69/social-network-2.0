// // Music.jsx

// import React from 'react';
// import s from './Music.module.css';

// const Music = (props) => {
//   return (
//     <div className={s.music}>
//       <div className={s.pageHeader}>
//         <h2>Музика</h2>
//       </div>
//       <div className={s.musicContent}>
//         <div className={s.songList}>
//           <h3>Мої улюблені пісні</h3>
//           <ul>
//             <li>Shape of You - Ed Sheeran</li>
//             <li>Bohemian Rhapsody - Queen</li>
//             <li>Blinding Lights - The Weeknd</li>
//             {/* Додавайте більше пісень за потребою */}
//           </ul>
//         </div>
//         <div className={s.audioPlayer}>
//           <h3>Аудіоплеєр</h3>
//           <audio controls>
//             <source src="your-audio-file.mp3" type="audio/mpeg" />
//             Ваш браузер не підтримує аудіо елемент.
//           </audio>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Music;

// Music.jsx

import React, { useState } from 'react';
import s from './Music.module.css';

const Music = (props) => {
  const [songs, setSongs] = useState([
    { id: 1, name: 'Shape of You - Ed Sheeran', genre: 'Pop', duration: '3:54', isPlaying: false, progress: 0 },
    { id: 2, name: 'Someone You Loved - Lewis Capaldi', genre: 'Pop', duration: '3:02', isPlaying: false, progress: 0 },
    { id: 3, name: 'Despacito - Luis Fonsi ft. Daddy Yankee', genre: 'Latin', duration: '4:41', isPlaying: false, progress: 0 },
    { id: 4, name: 'Havana - Camila Cabello ft. Young Thug', genre: 'Pop', duration: '3:37', isPlaying: false, progress: 0 },
    { id: 5, name: 'Believer - Imagine Dragons', genre: 'Rock', duration: '3:24', isPlaying: false, progress: 0 },
  ]);

  const togglePlayPause = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id
          ? { ...song, isPlaying: !song.isPlaying }
          : { ...song, isPlaying: false }
      )
    );
  };

  const handleProgressChange = (id, e) => {
    const newProgress = parseInt(e.target.value);
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id ? { ...song, progress: newProgress } : song
      )
    );
  };

  return (
    <div className={s.music}>
      <div className={s.pageHeader}>
        <h2>Музика</h2>
      </div>
      <div className={s.musicContent}>
        {songs.map((song) => (
          <div key={song.id} className={s.songContainer}>
            <div className={s.songInfo}>
              <div className={s.songName}>{song.name}</div>
              <div className={s.songDetails}>
                <span>{song.genre}</span> | <span>{song.duration}</span>
              </div>
            </div>
            <div className={s.songControls}>
              <button
                className={`${s.playPauseButton} ${
                  song.isPlaying ? s.isPlaying : ''
                }`}
                onClick={() => togglePlayPause(song.id)}
              >
                {song.isPlaying ? 'Пауза' : 'Старт'}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={song.progress}
                onChange={(e) => handleProgressChange(song.id, e)}
                className={s.progressBar}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
