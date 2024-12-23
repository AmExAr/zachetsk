import React from 'react'
import ActiveClasses from './Active.module.css'

function Active(props) {
  return (
    <>
      <div className={ActiveClasses.map}>
        <img  src={props.map} alt ="карта"/>
      </div>

      <h1 className={ActiveClasses.h}> Портфель проектов </h1>

      <div className={ActiveClasses.container}>
            <div className={ActiveClasses.column}>
                <img src={props.cr1} alt="Круг1" className={ActiveClasses.circle_image}/>
                <img src={props.cr2} alt="Круг2" className={ActiveClasses.circle_image}/>
                <img src={props.cr3} alt="Круг3" className={ActiveClasses.circle_image}/>
                <img src={props.cr4} alt="Круг4" className={ActiveClasses.circle_image}/>
            </div>
            <div className={ActiveClasses.column}>
                <div className={ActiveClasses.text_item}>
                    <h3>Местоположение</h3>
                    <p>Красноярский край, Восточная <br></br> Сибирь, Россия</p>
                </div>
                <div className={ActiveClasses.text_item}>
                    <h3>Местоположение</h3>
                    <p>Иркутская область, Восточная <br></br> Cибирь, Россия</p>
                </div>
                <div className={ActiveClasses.text_item}>
                    <h3>Местоположение</h3>
                    <p>Читинская область, Восточная <br></br> Сибирь, Россия</p>
                </div>
                <div className={ActiveClasses.text_item}>
                    <h3>Местоположение</h3>
                    <p>Камчатская область, Восточная <br></br> Сибирь, Россия</p>
                </div>
            </div>
            <div className={ActiveClasses.column}>
                <div className={ActiveClasses.text_itemsec}>
                    <h3>Добыто в 2023 году</h3>
                    <p>1500 тыс. унций</p>
                </div>
                <div className={ActiveClasses.text_itemsec}>
                    <h3>Добыто в 2023 году</h3>
                    <p>700 тыс. унций</p>
                </div>
                <div className={ActiveClasses.text_itemsec}>
                    <h3>Добыто в 2023 году</h3>
                    <p>500 тыс. унций</p>
                </div>
                <div className={ActiveClasses.text_itemsec}>
                    <h3>Добыто в 2023 году</h3>
                    <p>300 тыс. унций</p>
                </div> 
            </div>
        </div>
    </>
  )
}

export default Active