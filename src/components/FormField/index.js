import React from 'react';
import styles from './formField.module.scss';
import Form from 'react-bootstrap/Form';
import Input from '../Input';

const FormField = (props) => {

  const { label, ariaLabel, type, as, rows, value, name, placeholder, onChange } = props;

  return (
    <Form.Group className={styles.field}>
      <Form.Label>{label}</Form.Label>
      <Input 
        ariaLabel={ariaLabel} 
        type={type}
        as={as}
        rows={rows} 
        value={value} 
        name={name} 
        placeHolder={placeholder} 
        onChange={onChange}/>
    </Form.Group>
  )
}

export default FormField;