import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormField from '../../../../components/FormField';

const Ingredient = (props) => {

  const { ingredient, onChange } = props;

  return(
    <Row>
      <Col>
        <FormField label="name" value={ingredient.name} onChange={onChange} />
      </Col>
      <Col>
        <FormField label="quantity" value={ingredient.quantity} onChange={onChange} />
      </Col>
      <Col>
        <FormField label="measurement" value={ingredient.measurement} onChange={onChange}  />
      </Col>
    </Row>
  )
}

export default Ingredient;