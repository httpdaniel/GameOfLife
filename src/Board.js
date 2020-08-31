import React from "react";

function Board({ height, width }) {
  let tableHTML = "";

  for (let i = 0; i < height; i++) {
    let currentArrayRow = [];
    let currentHTMLRow = `<tr id="row ${i}">`;
    for (let x = 0; x < width; x++) {}
  }

  return (
    <div>
      <h1>I'm a board</h1>
      <p>this is where all the cells will go</p>
      <h1>{height}</h1>
      <h1>{width}</h1>
      <table></table>
    </div>
  );
}

export default Board;
