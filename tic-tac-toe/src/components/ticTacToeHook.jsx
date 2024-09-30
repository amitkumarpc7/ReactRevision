import React, { useState } from "react";

const initialBoard = () => Array(9).fill(null);
const ticTacToeHook = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXnext, setIsXNext] = useState(true);
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    // checking for winner
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;
    // copying data to new location
    const newBoard = [...board];
    newBoard[index] = isXnext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXnext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) {
      //   alert(`Player ${winner} wins !!!`);
      return `Player ${winner} wins !!!`;
    } else if (!board.includes(null)) return `It is a Draw`;
    return `Player ${isXnext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };
  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default ticTacToeHook;
