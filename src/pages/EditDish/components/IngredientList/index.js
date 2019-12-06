import React from 'react';
import Ingredient from '../Ingredient';

const IngredientList = (props) => {

  const { ingredients, onChange } = props;

  console.log('ingredients',ingredients.ingredients);

  return(
    <div>
      {ingredients.map((ingredient, index) =>
        <Ingredient ingredient={ingredient} key={index} onChange={onChange} />
      )}
    </div>
  )
}

export default IngredientList;