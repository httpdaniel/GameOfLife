import React, { useState } from "react";
import "./styles/Board.scss";

function Cell({ id }) {
  // Store state of cell i.e. dead or alive
  const [isAlive, setAlive] = useState(false);

  // Drag select cells
  const onMouseEvent = () => (e) => {
    e.stopPropagation();
    if (e.nativeEvent.which !== 1) {
      return;
    }
    setAlive(!isAlive);
  };

  // Click select cells
  const toggleClass = () => (e) => {
    e.stopPropagation();
    setAlive(!isAlive);
  };

  return (
    <td
      id={id}
      className={isAlive ? "alive" : null}
      onClick={toggleClass}
      onMouseOver={onMouseEvent()}
      onMouseDown={onMouseEvent()}
    ></td>
  );
}

export default Cell;
