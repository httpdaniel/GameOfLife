import React, { useState, useEffect } from "react";
import Board from "./Board";
import "./styles/App.scss";

function App() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  useEffect(() => {
    const navHeight = 70;
    const footer = 10;
    const height = Math.floor(
      (document.documentElement.clientHeight - navHeight - footer) / 25
    );
    const width = Math.floor(document.documentElement.clientWidth / 25);
    setHeight(height);
    setWidth(width);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <div className="buttons">
          <button id="generate">Generate</button>
          <div className="divider"></div>
          <button id="start">Start</button>
        </div>

        <div className="title">
          <h1>Game Of Life</h1>
        </div>

        <div className="links">
          <a
            href="https://github.com/httpdaniel/GameOfLife"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg version="1.1" id="Layer_1" viewBox="0 0 200 200">
              <path
                class="st0"
                d="M99.72,26C57,26,22.37,60.63,22.37,103.36c0,34.17,22.16,63.17,52.91,73.4c3.87,0.71,5.28-1.68,5.28-3.73
	c0-1.84-0.07-6.7-0.1-13.16c-21.52,4.67-26.06-10.37-26.06-10.37c-3.52-8.94-8.59-11.32-8.59-11.32c-7.02-4.8,0.53-4.7,0.53-4.7
	c7.76,0.55,11.85,7.97,11.85,7.97c6.9,11.82,18.11,8.41,22.51,6.43c0.7-5,2.7-8.41,4.91-10.34c-17.18-1.95-35.24-8.59-35.24-38.23
	c0-8.44,3.01-15.35,7.96-20.76c-0.8-1.96-3.45-9.82,0.76-20.47c0,0,6.5-2.08,21.27,7.93c6.17-1.72,12.79-2.57,19.37-2.6
	c6.57,0.03,13.19,0.89,19.37,2.6c14.77-10.01,21.25-7.93,21.25-7.93c4.22,10.65,1.57,18.52,0.77,20.47
	c4.96,5.41,7.95,12.31,7.95,20.76c0,29.72-18.09,36.26-35.32,38.17c2.78,2.39,5.25,7.11,5.25,14.33c0,10.34-0.09,18.68-0.09,21.22
	c0,2.07,1.39,4.48,5.32,3.72c30.71-10.25,52.86-39.22,52.86-73.39C177.08,60.63,142.44,26,99.72,26z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="app__body">
        <Board height={height} width={width} />
      </div>

      {/* Footer */}
      <div className="app__footer"></div>
    </div>
  );
}

export default App;
