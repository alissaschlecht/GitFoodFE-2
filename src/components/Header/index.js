import React from 'react';
import Button from '../Button';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Button title="Log out" />
      <p>Header</p>
    </div>
  )
}

export default Header;