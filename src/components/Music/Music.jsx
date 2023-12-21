// Music.jsx

import React from 'react';
import s from './Music.module.css';

const Music = (props) => {
  return (
    <div className={s.music}>
      <div className={s.pageHeader}>
        <h2>Музика</h2>
      </div>
      <div className={s.musicContent}>
        <div className={s.songList}>
          <h3>Мої улюблені пісні</h3>
          <ul>
            <li>Shape of You - Ed Sheeran</li>
            <li>Bohemian Rhapsody - Queen</li>
            <li>Blinding Lights - The Weeknd</li>
            {/* Додавайте більше пісень за потребою */}
          </ul>
        </div>
        <div className={s.audioPlayer}>
          <h3>Аудіоплеєр</h3>
          <audio controls>
            <source src="your-audio-file.mp3" type="audio/mpeg" />
            Ваш браузер не підтримує аудіо елемент.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default Music;
