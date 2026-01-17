import Button from '../button/Button';
import Logo from '../icons/Logo';
import Navbar from '../navbar/Navbar';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Logo/>
        <span>MedWay</span>
      </div>
      <Navbar />
      <Button
            label="Записатися"
            onClick={() => {
            alert('Запис на прийом');}}
            variant='primary'
        />
    </header>
  );
}