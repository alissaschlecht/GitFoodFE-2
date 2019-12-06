import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormField from '../../../../components/FormField';

class Ingredient extends Component {
  constructor(props){
    super(props);
    this.state={
      name: this.props.ingredient.name,
      quantity: this.props.ingredient.quantity,
      measurement: this.props.ingredient.measurement
    }
  }

  updateField = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value })
    this.props.onChange(this.state[name], 'ingredients', this.props.index )
  }

  render(){
    return(
      <Row>
        <Col>
          <FormField 
            label="name" 
            name="name"
            value={this.state.name} 
            onChange={this.updateField} />
        </Col>
        <Col>
          <FormField 
            label="quantity" 
            name="quantity"
            value={this.state.quantity} 
            onChange={this.updateField} />
        </Col>
        <Col>
          <FormField 
          label="measurement"
          name="measurement" 
          value={this.state.measurement} 
          onChange={this.updateField}  />
        </Col>
      </Row>
    )     
  }
}

export default Ingredient;