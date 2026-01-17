import { useEffect, useRef, useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {

  const ref = useRef<HTMLElement>(null);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 768);
    };

    handleResize(); // сразу при маунте
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <nav className={styles.navbar} ref={ref}>
        <p className={styles.option}>Про нас</p>
        <p className={styles.option}>Наші лікарі</p>
        <p className={styles.option}>Контакти</p>
    </nav>
  );
}