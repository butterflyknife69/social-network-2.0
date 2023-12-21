// Video.jsx

import React from "react";
import s from "./Video.module.css";

const Video = (props) => {
  return (
    <div className={s.video}>
      <div className={s.videoWrapper}>
        <iframe
          title="Video"
          width="480" // Зменшено ширину відео
          height="270" // Зменшено висоту відео
          src="https://www.youtube.com/embed/your-video-id"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={s.videoInfo}>
        <div className={s.videoTitle}>Awesome Video Title</div>
        <div className={s.videoDetails}>
          <span className={s.views}>1,234,567 views</span>
          <span className={s.dot}>•</span>
          <span className={s.timestamp}>2 days ago</span>
        </div>
        <div className={s.author}>
          <img
            className={s.authorAvatar}
            src="https://placekitten.com/40/40"
            alt="Author Avatar"
          />
          <span className={s.authorName}>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
