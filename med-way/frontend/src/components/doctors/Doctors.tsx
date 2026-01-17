import DoctorCard from '../doctorCard/Doctor-card';
import styles from './doctors.module.css';

export default function Doctors() {

    const doctorList: {name: string, imageURL: string, description: string}[] = [
        {
            name: 'Ковальчук Іван Валерійович',
            imageURL: '/doctors/kovalchuk.jpg',
            description: 'Лікар із рідкісним поєднанням спеціальностей — кардіолог, ревматолог, анестезіолог-реаніматолог та сімейний лікар. Поєднує багаторічний клінічний досвід із активною участю в наукових дослідженнях нових терапевтичних підходів. Застосовує персоналізовані схеми лікування, підбираючи біологічні препарати за міжнародними стандартами для досягнення максимально ефективного результату для пацієнта.'
        },
        {
            name: 'Іващук Вікторія Олександрівна',
            imageURL: '/doctors/ivashchuk.jpg',
            description: 'Лікар ультразвукової діагностики з понад 10-річним досвідом. Спеціалізується на УЗД серця, доплерографії судин шиї та голови, УЗД артерій нижніх кінцівок та векторному аналізі серця за технологією Speckle Tracking (STE). Має вищу медичну освіту та досвід роботи у сімейній медицині, поєднуючи клінічну практику з сучасними методиками для максимально точних результатів.'
        }
    ];

    return (
        <section className={styles.doctors}>
            <h2 className={styles.doctorsTitle}>Наші лікарі</h2>
            <div className={styles.doctorsContent}>
                {
                    doctorList.map((doctor, index) =>
                        <DoctorCard
                            key={index}
                            name={doctor.name}
                            description={doctor.description}
                            photoUrl={doctor.imageURL}
                        />
                    )
                }
            </div>
        </section>
    );
};