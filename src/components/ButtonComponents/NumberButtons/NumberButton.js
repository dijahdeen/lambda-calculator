import React from "react";
import Display from "../../DisplayComponents/Display"

const NumberButton = props => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className={"number_button " + (props.number == 0 ? 'zero' : '')}
      >
        {props.number}
      </button>
    </>
  );
};

export default NumberButton;