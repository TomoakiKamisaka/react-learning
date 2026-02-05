import { useState } from "react";

export default function Game(){
  const [xIsNext , setXIsNext] = useState(true);
  const [history,setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];


function handlePlay(nextSquares){
  const nextHistory = [...history.slice(0 , currentMove + 1), nextSquares];
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
  setXIsNext(!xIsNext);
}

function jumpTo(nextMove){
  setCurrentMove(nextMove);
  setXIsNext(nextMove % 2 === 0);
}
const moves = history.map((squares, move)=>{
  let description;
  if(move > 0){
    description = "Go to move #" + move;
  }else{
    description = "Go to game start";
  }
  if(move === currentMove){
    return(
      <li key={move}>
        <h2>You are at move # {move}</h2>
      </li>
    )    
  }else{
    return(
      <li key={move}>
       <button onClick={()=>jumpTo(move)}>{description}</button>
      </li>
    )
  }

});

  return(
    <div>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    </div>
  )
}


function Board({xIsNext, squares, onPlay}) {
  function handleClick(i){
      if(squares[i] || calculateWinner(squares)){
        return;
      }
      const nextSquares = squares.slice();
      if(xIsNext){
        nextSquares[i] = "X";        
      }else{
        nextSquares[i] = "⚪︎";         
      }
      onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }else{
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

  const boardRows = [0,1,2].map((row) => {
    const rowSquares = [0,1,2].map((col)=> {
      const index = row*3 + col;
      return(
        <Square 
          key={index} 
          value={squares[index]} 
          onSquareClick={()=> handleClick(index)} 
        />
      )
    });
    return(
      <div key={row} className="board-row">
        {rowSquares}
      </div>
    );
  });


  return (
    <div>
      <div className="status">{status}</div>
      {boardRows}
    </div>
  );
}

function Square({value , onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
