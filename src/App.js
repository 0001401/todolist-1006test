import "./App.css";
import { useState } from "react";

function App() {
  //

  const [todo, setTodo] = useState(["react 정복하기"]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="text-div">
        <input
          onChange={(e) => {
            setText(e.target.value);
            console.log(e.target.value);
          }}
          value={text}
        />
        <button
          onClick={() => {
            let copy = [...todo];
            copy.push(text);
            setTodo(copy);
            // console.log(setTodo);
          }}
        >
          추가하기
        </button>
      </div>
      <h1>Todo List</h1>
      {todo.map(function (a, i) {
        return <div className="div-box">{todo[i]}</div>;
      })}
    </div>
  );
}

export default App;
