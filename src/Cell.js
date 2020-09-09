import React, { useState } from "react";
import "./styles/Board.scss";

function Cell({ id }) {
  // Store state of cell i.e. dead or alive
  const [isAlive, setAlive] = useState(false);

  const toggleClass = () => {
    setAlive(!isAlive);
  };

  return (
    <td id={id} className={isAlive ? "alive" : null} onClick={toggleClass}></td>
  );
}

export default Cell;
