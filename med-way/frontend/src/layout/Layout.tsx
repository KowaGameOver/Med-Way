import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
        <Header/>
        <main className={styles.main}>{children}</main>
    </div>
  );
}