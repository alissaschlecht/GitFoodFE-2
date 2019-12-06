import React, { Component } from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

class AddInstruction extends Component {
  constructor(props) {
    super(props);
    this.state={
      description: ''
    }
  }

  onChange = (event) =>{
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  addInstruction = (event) => {
    event.preventDefault();
    const instruction = this.state;
    this.props.addInstruction(instruction, 'instructions');
    this.setState({ description: '' });
  }

  render(){
    return(
      <div className="form-row">
        <Input 
          label="Description" 
          name="description" 
          value={this.state.description}
          onChange={this.onChange} />
        <Button title="Add instruction" onClick={this.addInstruction} />
      </div>
    )
  }
}

export default AddInstruction;