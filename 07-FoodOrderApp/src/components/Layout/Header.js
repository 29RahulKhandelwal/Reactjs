import React, { Fragment } from 'react'
import classes from "./Header.module.css";

const Header = () => {
  return (
      <Fragment>
        <header>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div></div>
      </Fragment>
  )
}

export default Header