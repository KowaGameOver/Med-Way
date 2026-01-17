import styles from './doctor.module.css';

type DoctorCardProps = {
    name: string;
    description: string;
    photoUrl: string;
};

export default function DoctorCard({ name, description, photoUrl }: DoctorCardProps) {

    return (
        <div className={styles.doctorCard}>
            <img src={photoUrl} alt={name} className={styles.doctorPhoto} />
            <div className={styles.doctorInfo}>
                <h3 className={styles.doctorName}>{name}</h3>
                <p className={styles.doctorDescription}>{description}</p>
            </div>
        </div>
    );
}