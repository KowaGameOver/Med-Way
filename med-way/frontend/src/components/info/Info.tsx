import styles from "./info.module.css";

export default function Info() {
  const phones = [
    { label: "+380 (61) 270-63-26", tel: "+380612706326" },
    { label: "+380 (98) 893-80-22", tel: "+380988938022" },
    { label: "+380 (63) 797-84-82", tel: "+380637978482" },
    { label: "+380 (95) 598-24-44", tel: "+380955982444" },
  ];

  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>Контакти</h2>

      <div className={styles.card}>
        <p className={styles.text}>
          Діагностичний центр <b>MedWay</b> у Запоріжжі (доктор Молодан А. В.)
          надає професійні медичні послуги у м. Запоріжжя. за адресою: вулиця Миру, 20 Діагностичний центр MedWay у центрі міста. 
        </p>

        <div className={styles.block}>
          <div className={styles.label}>Телефони для запису</div>

          <div className={styles.phones}>
            {phones.map((p) => (
              <div className={styles.phone}>
                {p.label}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.socials}>
          <a
            className={styles.socialBtn}
            href="https://www.instagram.com/aleskandrmolodan/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.socialIcon} src={'/icons/inst-icon.png'} alt="" />
            Instagram
          </a>

          <a
            className={styles.socialBtn}
            href="https://www.facebook.com/profile.php?id=100083161279033"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.socialIcon} src={'/icons/facebook-icon.png'} alt="" />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
