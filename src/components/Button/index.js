import React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import styles from './button.module.scss';

const Button = (props) => {

  const { title, onClick, variant = 'contained' } = props;
  
  return (
    <BSButton 
      onClick={onClick} 
      className={styles.button}
      variant={variant}
      >{title}</BSButton>
  )
}

export default Button;