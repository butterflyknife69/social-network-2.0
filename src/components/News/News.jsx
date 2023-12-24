
import s from "./News.module.css"


const News = (props) => {
    return (
        <div className={s.news}>
            <h2>Заголовок новин</h2>
            <img src="шлях_до_зображення.jpg" alt="Опис зображення" />
            <p>
                Тут може бути текст вашої новини. Також можна додавати інші елементи, такі як зображення.
            </p>
            <div className={s['news-info']}>
                <span>Дата: 24 грудня 2023</span>
                <span>Автор: Ім'я Автора</span>
            </div>
            
        </div>
    )
}

export default News;