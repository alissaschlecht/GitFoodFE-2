import React from 'react';
import './search.module.scss';

const Search = (props) => {
  
  const { title, type, onChange } = props;

  return (
    <div>
      <label>{title}</label>
      <input 
        type={type} 
        onChange={onChange} />
    </div>
  )

}

export default Search;