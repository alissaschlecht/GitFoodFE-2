import React, { Component } from 'react';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import ListIngredients from './components/ListIngredients';
import ListInstructions from './components/ListInstructions';
import AddIngredient from './components/AddIngredient';
import AddInstruction from './components/AddInstruction';
import { withRouter } from 'react-router-dom';
// import styles from './addDish.module.scss';

const url = "https://git-food-api.herokuapp.com/api/dishes";

class addDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: [],
      instructions: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      dish: {
        name: this.state.name,
        versions : [
          {
            versionNumber: 1,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
          }
        ]
      }
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(() => this.props.history.push("/"))
    .catch(err => console.log(err));
  }


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addElement = (obj, propName) => {
    let newArr = this.state[propName];
    console.log('newArr', newArr);
    newArr.push(obj);
    // if(propName === 'instructions') {
    //   console.log('this should sort');
    //   return newArr.sort((a, b) => parseInt(a.stepNumber) > parseInt(b.stepNumber));
    // }
    this.setState({[propName]: newArr});
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <h1>Add new dish</h1>
        <form>
          <FormField
            label="Dish name" 
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <ListIngredients ingredients={this.state.ingredients} />
          <AddIngredient addIngredient={this.addElement} />
          <ListInstructions instructions={this.state.instructions} />
          <AddInstruction addInstruction={this.addElement} />
          <Button title="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default withRouter(addDish);