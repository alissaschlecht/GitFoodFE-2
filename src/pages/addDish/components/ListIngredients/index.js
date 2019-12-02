import React, { Component } from 'react';

class ListIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: "diced tomatoes", quantity: 1, measurement: "cup"},
      ]
    }
  }
  

  render(){
      return(
        <div>
          { this.props.ingredients.length ?
          <ul>
            { this.props.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name}
                  {ingredient.quantity}
                  {ingredient.measurement}
                </li>
            ))} 
          </ul>
          : null
          }
        </div>
      )
  }
}

export default ListIngredients;