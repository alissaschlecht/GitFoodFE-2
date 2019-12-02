import React from 'react';

const ListInstructions = ({instructions}) => {
  return(
    <div>
      { instructions.length ? 
        <ul>
          { instructions.map((instruction, index) => (
              <li key={index}>
                {instruction.description}
                {instruction.stepNumber}
              </li>
          ))}
        </ul>
        : null
      }
    </div>
  )
}

export default ListInstructions;