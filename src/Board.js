import React from "react";
import Cell from "./Cell";
import "./styles/Board.scss";

function Board({ height, width }) {
  const createTable = () => {
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < height; i++) {
      let children = [];
      // Inner loop to create children
      for (let j = 0; j < width; j++) {
        children.push(<Cell key={[i, j]} id={["cell ", i, " ", j].join("")} />);
      }
      // Create the parent and add the children
      table.push(
        <tr key={i} id={["row ", i].join("")}>
          {children}
        </tr>
      );
    }
    return table;
  };

  return (
    <table>
      <tbody>{createTable()}</tbody>
    </table>
  );
}

export default Board;
