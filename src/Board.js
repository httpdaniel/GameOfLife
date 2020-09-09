import React from "react";
import "./styles/Board.scss";

function Board({ height, width }) {
  const createTable = () => {
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < height; i++) {
      let children = [];
      // Inner loop to create children
      for (let j = 0; j < width; j++) {
        children.push(<td></td>);
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>);
    }
    return table;
  };

  return <table>{createTable()}</table>;
}

export default Board;
