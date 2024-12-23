import React, { useState } from 'react';
import AboutClasses from './About.module.css';
import { 
    validateName, 
    validateSurname, 
    validatePhone, 
    validateEmail, 
    validateUniversity, 
    validateFaculty, 
    validateCourse, 
    validateSpecialty 
} from './aboutval.js';

function About() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [faculty, setFaculty] = useState('');
    const [course, setCourse] = useState('');
    const [specialty, setSpecialty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateName(name)) {
            alert("Введите корректное имя");
            return;
        }
        if (!validateSurname(surname)) {
            alert("Введите корректную фамилию");
            return;
        }
        if (!validatePhone(phone)) {
            alert("Введите корректный номер телефона (от 9 до 11 цифр)");
            return;
        }
        if (!validateEmail(email)) {
            alert("Введите корректный E-mail (example@ex.com)");
            return;
        }
        if (!validateUniversity(university)) {
            alert("Введите корректный университет");
            return;
        }
        if (!validateFaculty(faculty)) {
            alert("Введите корректный факультет");
            return;
        }
        if (!validateCourse(course)) {
            alert("Введите корректный курс (положительное целое число)");
            return;
        }
        if (!validateSpecialty(specialty)) {
            alert("Введите корректную специальность");
            return;
        }

        alert(`Имя: ${name}\nФамилия: ${surname}\nТелефон: ${phone}\nE-mail: ${email}\nУниверситет: ${university}\nФакультет: ${faculty}\nКурс: ${course}\nСпециальность: ${specialty}`);
        
        // Сброс значений полей
        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setUniversity('');
        setFaculty('');
        setCourse('');
        setSpecialty('');
    };

    return (
        <>
            <header className={AboutClasses.header}>
                <p className={AboutClasses.par}>ПАО «Рудник» — крупнейший производитель золота в России и одна из 5 ведущих глобальных золотодобывающих компаний, себестоимость производства на предприятиях которой является одной из самых низких в мире.</p>
                <p className={AboutClasses.par}>«Рудник» входит в ТОП-3 мировых лидеров по запасам золота (доказанные и вероятные запасы по международной классификации составляют 109 миллионов унций) — фундаменте устойчивого роста производства.</p>
                <p className={AboutClasses.par}>Основные предприятия компании расположены в Красноярском крае, Иркутской, Читинской и Камачатской областях и включают 4 действующих рудника и ряд проектов в стадии строительства и развития.</p>
            </header>
            
            <section className={AboutClasses.section}>
                <h1 className={AboutClasses.h}>Желаете пройти стажировку в нашей компании?</h1>
                <h5 className={AboutClasses.h}>Заполните анкету и мы свяжемся с вами</h5>
                <form className={AboutClasses.form} onSubmit={handleSubmit}>
                <div className={AboutClasses.inputsContainer}>
                  <input type='text' placeholder='Ваше Имя' className={AboutClasses.input} required />
                  <input type='text' placeholder='Ваша Фамилия' className={AboutClasses.input} required />
                  <input type='tel' placeholder='Ваш телефон' className={AboutClasses.input} required />
                  <input type='email' placeholder='Ваш E-mail' className={AboutClasses.input} required />
                  <input type='text' placeholder='Ваш Университет' className={AboutClasses.input} required />
                  <input type='text' placeholder='Ваш Факультет' className={AboutClasses.input} required />
                  <input type='number' placeholder='На каком курсе вы обучаететсь?' className={AboutClasses.input} required />
                  <input type='text' placeholder='Ваша Специальность' className={AboutClasses.input} required />
                </div>
                    <button className={AboutClasses.btn}>Отправить</button>
                </form>
            </section>
        </>
    );
}

export default About;
