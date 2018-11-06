import React from 'react';
import './TypeButton.css';

const TypeButton = (props) => {
  return(
    <div className='type-button'>
      {props.purpose}
    </div>
  )
}

export default TypeButton;