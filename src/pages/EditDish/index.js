import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import IngredientList from './components/IngredientList';
import InstructionList from './components/InstructionList';

const url = "https://git-food-api.herokuapp.com/api/dishes";


class EditDish extends Component {
  constructor(props) {
    super(props);
    const data = this.props.location.state;
    this.state = {
      name: data.name,
      ingredients: data.versions[0].ingredients,
      instructions: data.versions[0].instructions,
    }
  }

  updateField = () => {
    console.log('hahah');
  }
  
  updateDish = () => {

    const dishData = { "dish": this.state.dish }

    fetch(`${url}/${this.state.dish.id}`, {
      method: "PUT",
      body: JSON.stringify(dishData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }

  render() {

    console.log('state', this.state);
    return(
      <Container>
        <Form>
          <FormField label="name" />
          <FormField label="instruction" />
          <IngredientList ingredients={this.state.ingredients} onChange={this.updateField}/>
          <InstructionList instructions={this.state.instructions} onChange={this.updateField} />
        </Form>
        <Button title="Save" variant="primary" onChange={this.updateDish} />
      </Container>
    )
  }

}

export default EditDish;