import React, { useState } from "react";
import NumberButton from "../ButtonComponents/NumberButtons/NumberButton"
import { createSecureContext } from "tls";
import { tsPropertySignature } from "@babel/types";


const Display = () => {
  const [val, setVal] = useState(0);
  return <div className="display">
    {/* Display any props data here */}
    {val}
  </div>;
};

export default Display; 