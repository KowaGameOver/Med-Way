import { useEffect, useState } from 'react';
import styles from './slider.module.css';

export default function Slider() {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const images = [
        '/slider/1.jpg',
        '/slider/2.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slider}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={styles.sliderImage}
                    style={{ backgroundImage: `url(${image})` }}
                    data-active={index === currentImgIndex}
                />
            ))}
            <div className={styles.sliderOverlay} />
            <h2 className={styles.sliderText}>
                Діагностичний центр <span className={styles.sliderTextSpan}>MedWay</span>
                <br />
                доктора Молодана А.В.
            </h2>
        </div>
    );
}