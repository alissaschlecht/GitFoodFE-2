import React from 'react';
import styles from './button.module.scss';

const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button className={styles.button} type="button" onClick={onClick}>{title}</button>
  )
}

export default Button;