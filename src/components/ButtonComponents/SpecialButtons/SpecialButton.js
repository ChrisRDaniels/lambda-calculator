import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button className="special_button">
        {props.specials}
      </button>
    </>
  );
};

export default SpecialButton;