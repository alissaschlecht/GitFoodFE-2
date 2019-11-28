import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './addDish.module.scss';

const url = "https://git-food-api.herokuapp.com/api/dishes";

class addDish extends Component {
  constructor() {
    super();
    this.state = {
      dish: {
        name: 'test',
        version: {
          versionNumber: 1,
          ingredients: [
            {
              name: 'test ingredient',
              quantity: 1,
              measurement: 'test measurement'
            }
          ],
          instructions: [
            {
              stepNumber: 1,
              description: 'test description'
            }
          ],
        }
      }
    }
  }

  submit = () => {
    console.log(this.state);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h1>Add dish</h1>
        <form>
          <Input label="Dish name" type="text" />
          <Input label="Ingredient name" type="text" />
          <Input label="Ingredient quantity" type="text" />
          <Input ariaLabel="Ingredient measurement" type="text" />
          <Button title="Submit" onClick={this.submit} />
        </form>
      </div>
    )
  }
}

export default addDish;