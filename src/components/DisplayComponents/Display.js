import React, {useState} from "react";

const Display = () => {
  const [math, calculateMath] = useState(12345);

  return <div className="display">
  {math}</div>;
};

export default Display;