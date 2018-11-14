import React from 'react';

const validate = (props) => {
  return (
    <div>
      <p>
        { props.textLength < 5 ? "Text too short" : "Text long enough" }
      </p>
    </div>
  );
}

export default validate;
