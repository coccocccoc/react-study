import { useReducer, useState } from 'react';
import './App.css'
import { type } from '@testing-library/user-event/dist/type';

// 3. useState -> useReducer 변경
// todo list를 reducer로 관리

function App() {

  // const [list, setList] = useState([])
  const [content, setContent] = useState('')
  const [nextId, setNextId] = useState(1)

  // reducer: state를 한곳에서 관리하는 함수
  // state를 체계적으로 관리하는 도구

  // 1. reducer 함수 만들기
  // 매개변수: 이전 state값, 액션(명령)
  // 리턴값: 새로운 state
  // reducer는 순수한 함수로 함수 내부에서 list가 아닌 다른 state를 직접 쓰면 안됨!
  function reducerList(oldState, action) {
    
    // 명령에 따라 list state를 변경
    if (action.type === 'add') {
      const newTodo = { id: action.id, content: action.content }
      const newList = [...oldState]
      newList.push(newTodo)
      return newList
    } else if (action.type === 'delete') {
      // list에서 선택한 id를 제거
      const newList = [...oldState]
      const filterList = newList.filter(todo => todo.id !== action.id)
      return filterList
    } else if (action.type === 'reset') {
      return []
    }

    return []
  }

  // 2. state와 dispatch 함수 만들기
  // 인자: reducer 함수와 state 초기값
  // 반환값: 현재 state, dispatch라는 함수
  const [list, dispatchList] = useReducer(reducerList, [])

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <div className="box">
        <input type="text" value={content} onChange={(event) => {
          setContent(event.target.value)
        }}></input>

        {/* 추가 버튼 수정 */}
        {/* set 함수 -> dispatch 함수 */}
        {/* setState: state를 직접 변경 */}
        {/* dispatch: 명령을 전달하여 reducer 함수를 통해 state 변경 */}
        <button onClick={() => {
          // const newTodo = { id: nextId, content: content }
          // list.push(newTodo)
          // const newList = [...list]
          // setList(newList)

          // 새로운 todo를 추가할 때 필요한 데이터를 함께 전달
          dispatchList({type:'add', id:nextId, content:content})
          
          setContent('')
          setNextId(nextId + 1)
        }}>추가</button>

        {/* 초기화 처리 */}
        <button onClick={() => {
          // setList([])
          dispatchList({type:'reset'})
        }}>초기화</button>
      </div>

      <ul>
        {/* 삭제처리 */}
        {/* set -> dispatch */}
        {list.map((todo) => {
          return (<li key={todo.id}>
            {todo.content}
            <button onClick={() => {
              // const newList = [...list]
              // const filterList = newList.filter(obj => obj.id !== todo.id)
              // setList(filterList)
              
              // 삭제 작업에 필요한 데이터를 함께 전달
              dispatchList({type:'delete', id:todo.id})
            }}>삭제</button>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default App;
