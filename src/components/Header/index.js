import React from 'react';
import Button from '../Button';
import Logo from '../Logo';
import { Link } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.brandContainer}>
        <Link to="/">
          <Logo />
        </Link>
        <h3>GitFood</h3>
      </div>
      <Button title="Log out" />
    </div>
  )
}

export default Header;