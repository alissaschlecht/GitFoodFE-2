import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

class EditDish extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  

  render() {

    console.log('state', this.props.location.state);
    return(
      <Container>
        <Form>
          <FormField label="name" />
          <FormField label="ingredient" />
          <FormField label="instruction" />
        </Form>
        <Button title="Save" onClick={this.updateDish} />
      </Container>
    )
  }

}

export default EditDish;