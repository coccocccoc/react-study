import { useState } from "react";
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [todolist, setTodolist] = useState([]);
  
  function add() {

    let newTodolist = [...todolist]

    // todolist가 하나도 없으면 1
    let newId = 1;
    // todolist가 하나라도 있으면 마지막 번호 + 1
    if (todolist.length != 0) {
      newId = todolist.length + 1
    }
    newTodolist.push({id:newId, body:input})
    
    setTodolist(newTodolist)
    setInput('')
  }

  function remove(id) {
    const newTodolist = todolist.filter(item => item.id !== id);
    setTodolist(newTodolist);
  }

  function reset() {
    setTodolist([])
  }


  return (
    <div className="App">
      <h2>To-Do List</h2>
      <div>
        <input type="text" placeholder="새 할 일 입력" value={input} onChange={(event) => setInput(event.target.value)}></input>
        <button onClick={add}>추가</button>
        <button onClick={reset}>초기화</button>
      </div>

      <ul>
        {todolist.map(item => (
          <li key={item.id}>
            {item.body}
            <button onClick={() => remove(item.id)}>삭제</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
