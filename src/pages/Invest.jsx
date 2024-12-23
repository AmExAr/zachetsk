import React, { useState } from 'react';
import InvestClasses from './Invest.module.css';
import { validateName, validateSurname, validatePhone, validateEmail } from './investval.js'; 

function Invest(props) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeSurname = (e) => setSurname(e.target.value);
    const handleChangePhone = (e) => setPhone(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);

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

        alert(`Имя: ${name}\nФамилия: ${surname}\nТелефон: ${phone}\nE-mail: ${email}`);
        
        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
    };

    return (
        <>
            <header className={InvestClasses.header}>
                <p className={InvestClasses.par}>Одним из главных приоритетов «Рудника» является максимизация прибыли для акционеров. Мы обеспечиваем устойчивый рост за счет рационального подхода к капитальным затратам и высокодоходных проектов развития наряду с сохранением доходности для инвесторов.</p>
                <p className={InvestClasses.par}>При взаимодействии с представителями инвестиционного сообщества «Рудник» следует принципам транспарентности, выстраивая открытые коммуникации и применяя лучшие практики для формирования у акционеров полной картины деятельности компании.</p>
                <p className={InvestClasses.par}>Дирекция по связям с инвесторами проводит регулярные конференц-звонки, приуроченные к публикации операционных и промежуточных и годовых финансовых результатов, а также важным корпоративным событиям.</p>
            </header>

            <section>
                <h1 className={InvestClasses.h}>Основные документы для инвесторов</h1>
                <div className={InvestClasses.imgCont}>
                    <div className={InvestClasses.block}>
                        <div className={InvestClasses.imageOverlay}>
                            <span className={InvestClasses.imgText}>Ключевые проекты роста</span>
                        </div>
                        <img src={props.bl1} alt='блок1' />
                    </div>
                    <div className={InvestClasses.block}>
                        <div className={InvestClasses.imageOverlay}>
                            <span className={InvestClasses.imgText}>Финансовые результаты <br /> за 2024 год</span>
                        </div>
                        <img src={props.bl2} alt='блок2' />
                    </div>
                    <div className={InvestClasses.block}>
                        <div className={InvestClasses.imageOverlay}>
                            <span className={InvestClasses.imgText}>Финансовые результаты <br /> за 2023 год</span>
                        </div>
                        <img src={props.bl3} alt='блок3' />
                    </div>
                </div>
            </section>
            
            <section className={InvestClasses.section}>
                <h1 className={InvestClasses.h}>Желаете стать инвестором?</h1>
                <h5 className={InvestClasses.h}>Заполните анкету и мы свяжемся с вами</h5>
                <form className={InvestClasses.form} onSubmit={handleSubmit}>
                    <input type='text' placeholder='Ваше Имя' className={InvestClasses.input} value={name} onChange={handleChangeName} required />
                    <input type='text' placeholder='Ваша Фамилия' className={InvestClasses.input} value={surname} onChange={handleChangeSurname} required />
                    <input type='tel' placeholder='Ваш телефон' className={InvestClasses.input} value={phone} onChange={handleChangePhone} required />
                    <input type='email' placeholder='Ваш E-mail' className={InvestClasses.input} value={email} onChange={handleChangeEmail} required />
                    <button className={InvestClasses.btn}>Отправить</button>
                </form>
            </section>
        </>
    );
}

export default Invest;
