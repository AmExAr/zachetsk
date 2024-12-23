import React from 'react'
import AboutClasses from './About.module.css'

function About() {
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
        <form className={AboutClasses.form}>
          <input type='text' placeholder='Ваше Имя' className={AboutClasses.input} required />
          <input type='text' placeholder='Ваша Фамилия' className={AboutClasses.input} required />
          <input type='tel' placeholder='Ваш телефон' className={AboutClasses.input} required />
          <input type='email' placeholder='Ваш E-mail' className={AboutClasses.input} required />
          <input type='text' placeholder='Ваш Университет' className={AboutClasses.input} required />
          <input type='text' placeholder='Ваш Факультет' className={AboutClasses.input} required />
          <input type='number' placeholder='На каком курсе вы обучаететсь?' className={AboutClasses.input} required />
          <input type='text' placeholder='Ваша Специальность' className={AboutClasses.input} required />
          
          <button className={AboutClasses.btn}> Отправить </button>
        </form>
      </section>
    </>
  )
}

export default About