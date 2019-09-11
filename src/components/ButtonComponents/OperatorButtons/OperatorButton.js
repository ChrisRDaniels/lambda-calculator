import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button className="operator-button">
        {props.operators}
      </button>
    </>
  );
};

export default OperatorButton;