// Settings.js

import React from "react";
import s from "./Settings.module.css";

const Settings = (props) => {
    return (
        <div className={s.settings}>
            <h2 className={s.title}>Налаштування</h2>
            <div className={s.settingsContent}>
                <div className={s.settingSection}>
                    <h3 className={s.sectionTitle}>Загальні налаштування</h3>
                    <div className={s.settingItem}>
                        <label>Мова сайту:</label>
                        <select>
                            <option>Українська</option>
                            <option>English</option>
                            <option>Русский</option>
                        </select>
                    </div>
                    <div className={s.settingItem}>
                        <label>Тема оформлення:</label>
                        <select>
                            <option>Світла</option>
                            <option>Темна</option>
                        </select>
                    </div>
                    {/* Додайте інші налаштування загального розділу */}
                </div>
                <div className={s.settingSection}>
                    <h3 className={s.sectionTitle}>Профіль</h3>
                    <div className={s.settingItem}>
                        <label>Ім'я:</label>
                        <input type="text" />
                    </div>
                    <div className={s.settingItem}>
                        <label>Email:</label>
                        <input type="email" />
                    </div>
                    {/* Додайте інші налаштування для профілю */}
                </div>
                <div className={s.settingSection}>
                    <h3 className={s.sectionTitle}>Безпека</h3>
                    <div className={s.settingItem}>
                        <label>Змінити пароль:</label>
                        <input type="password" />
                    </div>
                    <div className={s.settingItem}>
                        <label>Двоетапна аутентифікація:</label>
                        <input type="checkbox" />
                    </div>
                    {/* Додайте інші налаштування для безпеки */}
                </div>
                {/* Додайте інші розділи та налаштування за необхідності */}
            </div>
        </div>
    );
};

export default Settings;
