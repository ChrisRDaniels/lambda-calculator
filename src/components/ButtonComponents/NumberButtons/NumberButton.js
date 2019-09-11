import React from "react";

const NumberButton = props => {
  return (
    <>
      <button className="number_button">
        {props.numbers}
      </button>
    </>
  );
};

export default NumberButton;