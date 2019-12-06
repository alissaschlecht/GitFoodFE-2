import React from 'react';
import Instruction from '../Instruction';


const InstructionList = (props) => {

  const { instructions, onChange } = props;
  return(
    <div>
      {instructions.map((instruction, index) =>
        <Instruction 
          key={index} 
          stepNumber={instruction.stepNumber} 
          value={instruction.description} 
          onChange={onChange} />
      )}
    </div>
  )
}

export default InstructionList;