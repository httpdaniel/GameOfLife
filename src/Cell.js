import React, { useState } from "react";
import "./styles/Board.scss";

function Cell({ alive, handleClick }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return <td className={isActive ? "alive" : null} onClick={toggleClass}></td>;
}

export default Cell;
