import { useRef, useState } from "react";
import styles from "./info.module.css";




export default function Info() {
  const timerRef = useRef<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const copyPhone = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast("Скопійовано ✅");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("Скопійовано ✅");
    }
  };

  const showToast = (text: string) => {
      console.log("TOAST:", text);
    setToast(text);
    if (timerRef.current) 
      window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setToast(null), 1400);
  };


  const phones = [
    { label: "+380 (61) 270-63-26", tel: "+380612706326" },
    { label: "+380 (98) 893-80-22", tel: "+380988938022" },
    { label: "+380 (63) 797-84-82", tel: "+380637978482" },
    { label: "+380 (95) 598-24-44", tel: "+380955982444" },
  ];

  return (
    <section id="contacts" className={styles.wrap}>
      <h2 className={styles.title}>Контакти</h2>

      <div className={styles.card}>
        <p className={styles.text}>
          Діагностичний центр <b>MedWay</b> у Запоріжжі (доктор Молодан А. В.)
          надає професійні медичні послуги за адресою: вулиця Миру, 20 Діагностичний центр MedWay у центрі міста. 
        </p>

        <div className={styles.block}>
      <div className={styles.label}>Телефони для запису</div>

      <div className={styles.phones}>
        {phones.map((p) => (
          <div
            key={p.label}
            className={styles.phone}
            role="button"
            tabIndex={0}
            onClick={() => copyPhone(p.label)}
            onKeyDown={(e) => e.key === "Enter" && copyPhone(p.label)}
            title="Натисни, щоб скопіювати"
          >
            {p.label}
          </div>
        ))}
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
            <div
        className={`${styles.toast} ${toast ? styles.toastShow : ""}`}
        aria-live="polite">
        {toast ?? ""}
      </div>
    </div>
    </section>
  );
}
