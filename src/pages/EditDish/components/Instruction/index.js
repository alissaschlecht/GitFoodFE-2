import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormField from '../../../../components/FormField';

class Instruction extends Component {
  constructor(props){
    super(props);
    this.state={
      description: this.props.value,
    }
  }

  updateField = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value })
    this.props.onChange(this.state[name], 'instructions', this.props.index)
  }

  render() {
    return(
      <Row>
        <Col>
          <FormField 
            label={this.props.stepNumber}
            name="description" 
            as="textarea"
            rows="3" 
            value={this.state.description} 
            onChange={this.updateField} />
        </Col>
      </Row>
    )
  }
}

export default Instruction;