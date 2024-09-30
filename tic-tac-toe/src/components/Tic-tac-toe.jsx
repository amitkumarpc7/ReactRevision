import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import ticTacToeHook from "./ticTacToeHook";
import '../index.css'

const TicTacToe = () => {
  const [theme, setTheme] = useState('dark');
  const { board, handleClick, calculateWinner, getStatusMessage, resetGame } =
    ticTacToeHook();
  useEffect(() => {
    // document.documentElement.setAttribute("data-theme", theme);
    document.querySelector("body").setAttribute("data-theme",theme)
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="game">
      <div className="header">
        <h1 style={{ textDecoration: "underline" }}>Tic tac toe</h1>{" "}
        <button className="theme" onClick={toggleTheme}>
          <MdDarkMode />
        </button>
      </div>

      <div className="status">
        <span className="player">{getStatusMessage()}</span>
        <button className="res-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
