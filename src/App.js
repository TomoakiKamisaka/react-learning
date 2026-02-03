import { useState } from "react";

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

function Square() {
  const [value, setValue] = useState(null);
  const [rotate, setRotate] = useState(true);
  function handleClick() {
    if(rotate){
      setValue("⚪︎")
    }else{
      setValue("×")     
    }
    setRotate(!rotate);
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
