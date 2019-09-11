import React, {useState} from "react";

const Display = () => {
  const [math, calcMath] = useState(12345);

  return <div className="display">
  {math}</div>;
};

export default Display;