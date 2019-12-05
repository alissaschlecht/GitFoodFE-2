import React from 'react';
import styles from './formField.module.scss';
import { Form as SUForm } from 'semantic-ui-react'
import Input from '../Input';

const FormField = (props) => {

  const { label, ariaLabel, type, value, name, placeholder, onChange } = props;

  return (
    <SUForm.Field className={styles.field}>
      <label className={styles.label}>{ label }</label>
      <Input 
        ariaLabel={ariaLabel} 
        type={type} 
        value={value} 
        name={name} 
        placeHolder={placeholder} 
        onChange={onChange}/>
    </SUForm.Field>
  )
}

export default FormField;