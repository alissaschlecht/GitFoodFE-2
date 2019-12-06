import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from '../../components/Button';
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
      return response;
    })
    .then(json => this.setState({ dish: json.dish, isLoading: false }));
  }

  render(){

    const { isLoading, dish } = this.state;
    
    return(
      <Container>
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
                    <li key={index}>
                      {ingredient.quantity} 
                      {ingredient.measurement} 
                      {ingredient.name}
                    </li>
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
        <Link 
          to={{
            pathname: `${dish.id}/edit`,
            state: this.state.dish
          }} >
          <Button title="Edit" variant="primary" />
        </Link>
        
      </Container>
    )
  }
}

export default Dish;