import React from 'react';
import styles from './input.module.scss';

const Input = (props) => {

  const { label, ariaLabel, type, value, name, placeholder, onChange } = props;

  return (
    <>
      {label &&
        <label htmlFor={name}>{label}</label>
      }
      <input 
        aria-label={label ? label : ariaLabel} 
        type={type} 
        value={value} 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange} />
    </>
  )
}

export default Input;