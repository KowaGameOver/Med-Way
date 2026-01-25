import styles from "./mappoint.module.css";

type Props = {
  address: string;
};

export default function MapPoint({ address }: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <div className={styles.mapCard}>
      <div className={styles.mapFrame}>
        <iframe
          className={styles.mapIframe}
          src={src}
          loading="lazy"
          title="Google Map"
        />
        <a
          className={styles.mapOverlay}
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noreferrer"
        >
          Відкрити в Google Maps
        </a>
      </div>
    </div>
  );
}

