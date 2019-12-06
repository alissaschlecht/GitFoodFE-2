import React from 'react';
// import styles from './input.module.scss';
import Form from 'react-bootstrap/Form';

const Input = (props) => {

  const { label, type, as = 'input', rows = 1, value, name, placeholder, onChange } = props;

  return (
    <Form.Control 
      label={label} 
      type={type}
      as={as}
      rows={rows} 
      value={value} 
      name={name} 
      placeholder={placeholder} 
      onChange={onChange} />
  )
}

export default Input;