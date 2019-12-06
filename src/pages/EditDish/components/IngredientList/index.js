import React from 'react';
import Ingredient from '../Ingredient';

const IngredientList = (props) => {

  const { ingredients, onChange } = props;

  return(
    <div>
      {ingredients.map((ingredient, index) =>
        <Ingredient ingredient={ingredient} key={index} index={index} onChange={onChange} />
      )}
    </div>
  )
}

export default IngredientList;