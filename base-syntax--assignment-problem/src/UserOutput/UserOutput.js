import React from 'react'

import './UserOutput.css'

const output = (props) => {
  return (
    <div className="Output" >
      <p>My name is {props.username}</p>
    </div>
  );
};

export default output;
