import React from 'react';
import styles from './button.module.scss';

const Button = (props) => {
  const { title } = props;
  return (
    <button className={styles.button} type="button">{title}</button>
  )
}

export default Button;