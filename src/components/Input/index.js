import React from 'react';


const Input = (props) => {

  const { label, ariaLabel, type, value, placeholder } = props;

  return (
    <div>
      {label &&
        <label>{label}</label>
      }
      <input aria-label={label ? label : ariaLabel} type={type} value={value} placeholder={placeholder} />
    </div>
  )
}

export default Input;