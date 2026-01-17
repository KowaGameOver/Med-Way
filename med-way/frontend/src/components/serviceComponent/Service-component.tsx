import styles from './service-component.module.css';

type ServiceComponentProps = {
    name: string;
    description: string;
};

export default function ServiceComponent({ name, description }: ServiceComponentProps) {

    return (
        <div className={styles.serviceComponent}>
            <h3 className={styles.serviceTitle}>{name}</h3>
            <p className={styles.serviceDescription}>{description}</p>
        </div>
    );
}