import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormField from '../../../../components/FormField';

const Instruction = ({stepNumber, value, onClick}) => {
  return(
    <Row>
      <Col>
        <FormField 
          label={stepNumber} 
          as="textarea"
          rows="3" 
          value={value} 
          onClick={onClick} />
      </Col>
    </Row>
  )
}

export default Instruction;