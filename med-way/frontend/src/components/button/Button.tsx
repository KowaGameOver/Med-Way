import {clsx} from 'clsx';
import styles from './button.module.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
};

export default function Button({ label, onClick, variant }: ButtonProps) {
  return (
    <button className={clsx(styles.button, styles[variant])} onClick={onClick}>
      {label}
    </button>
  );
}