import React from 'react'
import styles from './header.style.module.css';
import { ReactComponent as Logo } from '../../logo.svg';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { BsCart } from 'react-icons/bs';
function Header() {
  return (
    <header>
      <div className={styles.header_main}>
      <div>
        <BsBoxArrowInLeft/>
        <BsCart/>
      </div>
      <div>
        <Logo/>
      </div>
      </div>
    </header>
  )
}

export default Header