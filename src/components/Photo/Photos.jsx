
import React from 'react';
import s from './Photos.module.css';

const Photos = (props) => {
  const photos = [
    { id: 1, src: 'photo1.jpg', description: 'Amazing landscape' },
    { id: 2, src: 'photo2.jpg', description: 'Beautiful sunset' },
    { id: 3, src: 'photo3.jpg', description: 'City lights at night' },

  ];

  return (
    <div className={s.photos}>
      <h2>Фотографії</h2>
      <div className={s.photosGrid}>
        {photos.map((photo) => (
          <div key={photo.id} className={s.photoItem}>
            <img src={photo.src} alt={photo.description} />
            <div className={s.photoDescription}>{photo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
