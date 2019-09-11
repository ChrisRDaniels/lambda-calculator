import React, {useState} from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = () => {

  const [specialsState] = useState(specials);
  return (
    <div className="Specials">
       {specialsState.map((specials, index) => (
         <SpecialButton key={index} specials={specials} />
       ))}
    </div>
  );
};

export default Specials;