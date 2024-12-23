import React from 'react';
import FooterClasses from './Footer.module.css';

function Footer(props) {
    return (
      <footer className={FooterClasses.footer}>
        <div className={FooterClasses.footerContent}>
          <div>
            <img src={props.img} alt="Логотип" className={FooterClasses.logo} />
          </div>
          <div className={FooterClasses.subscribeContainer}>
            <div>
              <h2>Подпишитесь на рассылку:</h2>
              <div className={FooterClasses.formContainer}>
                <input type="email" placeholder="Ваш email" className={FooterClasses.emailInput} />
                <a href='/' className={FooterClasses.btn}>Отправить</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;

