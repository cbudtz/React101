import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([{name:"Remember Milk",done:false},{name: "Remeber Hats",done:true}]);
  const [input, setInput] = useState("")
    function toggleTodo(key) {
      let newState = [...todos];
      newState[key].done=!newState[key].done
      setTodos(newState)
    }

    function addTodo() {
        let newTodoState = [...todos];
        newTodoState.push({name: input,done:false})
        setTodos(newTodoState);
        setInput("");
    }

    return (
      <div>
        {todos.map((todo,key)=>
            <div><button onClick={() => toggleTodo(key)}>Toggle Done</button>{todo.name} - {todo.done ? "Done" :"NotDone"} </div>
        )}
        <label>New Todo</label>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
      </div>
  );
}

export default App;
