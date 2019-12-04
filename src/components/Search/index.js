import React from 'react';
import './search.module.scss';
import FormField from '../../components/FormField';

const Search = (props) => {
  
  const { title, onChange } = props;

  return (
    <div>
      <label>{title}</label>
      <FormField 
        onChange={onChange} />
    </div>
  )

}

export default Search;