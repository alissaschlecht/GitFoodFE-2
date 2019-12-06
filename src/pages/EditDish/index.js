import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import IngredientList from './components/IngredientList';
import InstructionList from './components/InstructionList';

const url = "https://git-food-api.herokuapp.com/api/dishes";


class EditDish extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const data = this.props.location.state;
    this.state = {
      id: data.id,
      name: data.name,
      ingredients: data.versions[data.versions.length - 1].ingredients,
      instructions: data.versions[data.versions.length - 1].instructions,
      notes: data.versions[data.versions.length - 1].notes
    }
  }

  updateFieldArray = (value, source, index) => {

      let newValue = this.state[source];
      let newField = { ...this.state[source][index]};
      newField.name = value;
      newValue[index] = newField;

    this.setState({ [source]: newValue });

  }

  updateField = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }
  
  updateDish = (event) => {
    event.preventDefault();
    console.log('running');
    const dishData = { 
      "dish": {
        "name": this.state.name,
        "versions": [
          {
            "ingredients": this.state.ingredients,
            "instructions": this.state.instructions,
            "notes": this.state.notes
          }
        ] 
      }
    }

    fetch(`${url}/${this.state.id}`, {
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

    return(
      <Container>
        <Form>
          <Row>
            <Col lg={4}>
              <FormField label="name" name="name" value={this.state.name} onChange={this.updateField}/>
            </Col>
          </Row>
          <h2>Ingredients</h2>
          <IngredientList 
            ingredients={this.state.ingredients} 
            onChange={this.updateFieldArray}/>
          <h2>Instructions</h2>
          <InstructionList 
            instructions={this.state.instructions} 
            onChange={this.updateFieldArray} />
          <h2>Notes</h2>
          <Row>
            <Col>
              <FormField  
                as="textarea"
                rows="3" 
                name="notes" 
                value={this.state.notes} 
                onChange={this.updateField}/>
            </Col>
          </Row>
        </Form>
        <Button title="Save" variant="primary" onClick={this.updateDish} />
      </Container>
    )
  }

}

export default EditDish;