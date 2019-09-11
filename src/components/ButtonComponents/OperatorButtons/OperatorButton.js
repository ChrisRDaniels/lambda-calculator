import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button className="operator_button">
        {props.operators}
      </button>
    </>
  );
};

export default OperatorButton;