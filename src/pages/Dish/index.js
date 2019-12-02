import React, { Component } from 'react';
const url = "https://git-food-api.herokuapp.com/api/dishes";

class Dish extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dish: {}
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const { match: { params } } = this.props;
    fetch(`${url}/${params.id}`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    })
    .then(json => this.setState({ dish: json.dish, isLoading: false }));
  }

  render(){
    // if(this.state.dish.versions.length) {
    //   console.log(this.state.dish.versions[0].instructions[0].description)
    // }

    const { isLoading, dish } = this.state;
    
    return(
      <div>
        {isLoading ?
          <p>Loading...</p>
        :
        <div>
          <h1>{dish.name}</h1>
          <p>Dish ID: {dish.id}</p>
          {dish.versions.length ?
            <div> 
              <p>Version {dish.versions[0].versionNumber}</p>
              <h2>Ingredients</h2>
              {dish.versions[0].ingredients.length ?
                <ul> 
                  {dish.versions[0].ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.quantity} {ingredient.measurement} {ingredient.name}</li>
                  ))}
                </ul>
                : <p>No ingredients yet!</p>
              }
              <h2>Instructions</h2>
              {dish.versions[0].instructions.length ?
                <ul> 
                  {dish.versions[0].instructions.map((instruction, index) => (
                    <li key={index}>{instruction.stepNumber} {instruction.description}</li>
                  ))}
                </ul>
                : <p>No instructions yet!</p>
              }
            </div>
            : <p>Version 1</p>
          }
        </div>
        }
        {/* <p>{this.state.dish.versions[0]}</p> */}
      </div>
    )
  }
}

export default Dish;