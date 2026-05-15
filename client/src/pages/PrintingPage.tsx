import { useState } from "react";
import { Link } from "react-router";
import PrintingSection from "@/components/section/PrintingSection/PrintingSection";
import type { City } from "@/types";
import styles from "./PrintingPage.module.scss"; // Создайте этот файл для стилей кнопок

export const PrintingPage = () => {
    const [currentCity, setCurrentCity] = useState<City>('gomel');

    const handleCityToggle = () => {
        setCurrentCity(prev => prev === 'gomel' ? 'rechitsa' : 'gomel');
    };

    return (
        <div className={styles.printingPage}>
            {/* Панель навигации */}
            <nav className={styles.printingPage__nav}>
                <Link to="../" className={styles.printingPage__backLink}>
                    ← Назад
                </Link>
                
                <button 
                    onClick={handleCityToggle}
                    className={styles.printingPage__cityBtn}
                >
                    <span className={styles.printingPage__cityMarker} />
                    {currentCity === 'gomel' ? 'Гомель' : 'Речица'}
                </button>
            </nav>

            {/* Сам компонент секции */}
            <PrintingSection currentCity={currentCity} />
        </div>
    );
}