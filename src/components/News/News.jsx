
// import s from "./News.module.css"


// const News = (props) => {
//     return (
//         <div className={s.news}>
//             <h2>Заголовок новин</h2>
//             <img src="шлях_до_зображення.jpg" alt="Опис зображення" />
//             <p>
//                 Тут може бути текст вашої новини. Також можна додавати інші елементи, такі як зображення.
//             </p>
//             <div className={s['news-info']}>
//                 <span>Дата: 24 грудня 2023</span>
//                 <span>Автор: Ім'я Автора</span>
//             </div>
            
//         </div>
//     )
// }

// export default News;
// News.js
import React from 'react';
import s from './News.module.css';

const newsData = [
  {
    id: 1,
    title: 'Заголовок новини 1',
    image: 'шлях_до_зображення1.jpg',
    text: 'Тут може бути текст вашої новини. Також можна додавати інші елементи, такі як зображення.',
    date: '24 грудня 2023',
    author: 'Ім\'я Автора 1',
  },
  {
    id: 2,
    title: 'Заголовок новини 2',
    image: 'шлях_до_зображення2.jpg',
    text: 'Тут може бути текст вашої новини. Також можна додавати інші елементи, такі як зображення.',
    date: '25 грудня 2023',
    author: 'Ім\'я Автора 2',
  },
  // Додайте інші новини за аналогією
];

const News = () => {
  return (
    <div className={s.newsContainer}>
      {newsData.map((news) => (
        <div className={s.news} key={news.id}>
          <h2>{news.title}</h2>
          <img src={news.image} alt={`Зображення ${news.title}`} />
          <p>{news.text}</p>
          <div className={s['news-info']}>
            <span>Дата: {news.date}</span>
            <span>Автор: {news.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
