import React from 'react';
import styles from './input.module.scss';
import { Input as SUInput } from 'semantic-ui-react'

const Input = (props) => {

  const { ariaLabel, type, value, name, placeholder, onChange } = props;

  return (
      <SUInput 
        aria-label={ariaLabel} 
        type={type} 
        value={value} 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange} />
  )
}

export default Input;