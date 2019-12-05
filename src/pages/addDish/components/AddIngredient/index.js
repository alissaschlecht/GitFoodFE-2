import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';


class AddIngredient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      measurement: ''
    }
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const field = target.name;

    this.setState({ [field]: value })
  }

  addIngredient = (event) => {
    event.preventDefault();

    const ingredient = this.state;

    this.props.addIngredient(ingredient, 'ingredients');
    this.setState({ name: '', quantity: '', measurement: ''});
  }

  render() {
    return(
      <div className="form-row">
        <FormField
          label="Ingredient name" 
          name="name" 
          value={this.state.name}
          onChange={this.onChange} />

        <FormField 
          label="Ingredient quantity" 
          name="quantity" 
          value={this.state.quantity}
          onChange={this.onChange}/>
        <FormField 
          label="Ingredient measurement" 
          name="measurement" 
          value={this.state.measurement}
          onChange={this.onChange}/>
          <Button title="add ingredient" onClick={this.addIngredient} />
      </div>
    )
  }
  
}

export default AddIngredient;