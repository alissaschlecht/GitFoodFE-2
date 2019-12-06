import React from 'react';
import './search.module.scss';
import FormField from '../../components/FormField';

const Search = (props) => {
  
  const { label, onChange } = props;

  return (
    <div>
      <FormField
        label={label}
        onChange={onChange} />
    </div>
  )

}

export default Search;