import React from 'react';
import { Button as SUButton }  from 'semantic-ui-react';
import styles from './button.module.scss';

const Button = (props) => {

  const { title, onClick } = props;
  
  return (
    <SUButton onClick={onClick} className={styles.button}>{title}</SUButton>
  )
}

export default Button;