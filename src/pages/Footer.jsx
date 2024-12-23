import React, { useState } from 'react';
import FooterClasses from './Footer.module.css';
import { validateEmail, outputData } from './footerval.js';

function Footer(props) {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (validateEmail(email)) {
            outputData(email); 
            setEmail(''); 
        } else {
            alert("Введите корректную почту (example@ex.com)"); 
        }
    };

    return (
        <footer className={FooterClasses.footer}>
            <div className={FooterClasses.footerContent}>
                <div>
                    <img src={props.img} alt="Логотип" className={FooterClasses.logo} />
                </div>
                <div className={FooterClasses.subscribeContainer}>
                    <div>
                        <h2>Подпишитесь на рассылку:</h2>
                        <form className={FooterClasses.formContainer} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Ваш email"
                                className={FooterClasses.emailInput}
                                value={email}
                                onChange={handleChange}
                            />
                            <button type="submit" className={FooterClasses.btn}>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;