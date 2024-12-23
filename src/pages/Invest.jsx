import React from 'react'
import InvestClasses from './Invest.module.css'

function Invest(props) {
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
              <span className={InvestClasses.imgText}>Финансовые результаты <br></br> за 2024 год</span>
            </div>
            <img src={props.bl2} alt='блок2' />
          </div>
          <div className={InvestClasses.block}>
            <div className={InvestClasses.imageOverlay}>
              <span className={InvestClasses.imgText}>Финансовые результаты <br></br> за 2023 год</span>
            </div>
            <img src={props.bl3} alt='блок3' />
          </div>
        </div>
      </section>
      
      <section className={InvestClasses.section}>
        <h1 className={InvestClasses.h}>Желаете стать инвестором?</h1>
        <h5 className={InvestClasses.h}>Заполните анкету и мы свяжемся с вами</h5>
        <form className={InvestClasses.form}>
          <input type='text' placeholder='Ваше Имя' className={InvestClasses.input} required/>
          <input type='text' placeholder='Ваша Фамилия' className={InvestClasses.input} required/>
          <input type='tel' placeholder='Ваш телефон' className={InvestClasses.input} required/>
          <input type='email' placeholder='Ваш E-mail' className={InvestClasses.input} required/>
          <button className={InvestClasses.btn}> Отправить </button>
        </form>
      </section>
    </>
  )
}

export default Invest