import React from 'react'
import MenuClasses from './Menu.module.css'
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <>
      <header className={MenuClasses.header}>
        <div className={MenuClasses.marg}>
          <h1>Первые в своем деле</h1>
          <Link className={MenuClasses.btn} to='/invest'> Инвесторам </Link>
        </div>
      </header>

      <section className={MenuClasses.section}>
        <div>
          <h1>ГЛАВНОЕ <br></br> О РУДНИКЕ</h1>
          <Link className={MenuClasses.btn} to='/about'> О компании </Link>
        </div>

        <div className={MenuClasses.imageContainer}>
          <div className={MenuClasses.imageBox}>
            <div className={MenuClasses.imageOverlay}>
              <span className={MenuClasses.imageText}>3000</span>
              <span className={MenuClasses.imageSubtitle}>тыс. унц. золота<br />добыто в 2023 году</span>
            </div>
            <img src={props.pl1} alt="img1"/>
          </div>
          <div className={MenuClasses.imageBox}>
            <div className={MenuClasses.imageOverlay}>
              <span className={MenuClasses.imageText}>4</span>
              <span className={MenuClasses.imageSubtitle}>месторождения<br />золота</span>
            </div>
            <img src={props.pl2} alt="img2"/>
          </div>
          <div className={MenuClasses.imageBox}>
            <div className={MenuClasses.imageOverlay}>
              <span className={MenuClasses.imageText}>15</span>
              <span className={MenuClasses.imageSubtitle}>лет<br />в деле</span>
            </div>
            <img src={props.pl3} alt="img3"/>
          </div>
          <div className={MenuClasses.imageBox}>
            <div className={MenuClasses.imageOverlay}>
              <span className={MenuClasses.imageText}>5</span>
              <span className={MenuClasses.imageSubtitle}>в мировом<br />списке</span>
            </div>
            <img src={props.pl4} alt="img4"/>
          </div>
        </div>
      </section>

      <section className={MenuClasses.sectionsec}>
        <div>
          <h1>РУДНИК <br></br> НА КАРТЕ </h1>
          <Link className={MenuClasses.btn} to='/active'> Активы </Link>
        </div>

        <div className={MenuClasses.imageContainersec}>
          <img src={props.map} alt='Карта'/>          
        </div>
      </section>
    </>
  )
}

export default Menu