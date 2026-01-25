import { useEffect, useRef, useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {

  const ref = useRef<HTMLElement>(null);

  const [isVisible, setIsVisible] = useState(true);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 768);
    };

    handleResize(); 
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
    <p
      className={styles.option}
      onClick={() => scrollToSection("contacts")}
    >
      Контакти
    </p>

    <p
      className={styles.option}
      onClick={() => scrollToSection("services")}
    >
      Послуги
    </p>

    <p
      className={styles.option}
      onClick={() => scrollToSection("doctors")}
    >
      Наші лікарі
    </p>
  </nav>
);
}