import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css'

function Navigation(props) {
  return (
    <>
      <header className={classes.header}>
        <Link to='/'> <img className={classes.logo} src={props.img} alt='logo' /> </Link>
        <nav>
          <ul>
            <li> <Link className={classes.lk} to='/active'> Активы </Link> </li>
            <li> <Link className={classes.lk} to='/invest'> Инвесторам </Link> </li>
            <li> <Link className={classes.lk} to='/about'> О компании </Link> </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navigation