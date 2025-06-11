import { useState } from 'react';
import './App.css'

// 1. TODO 앱 화면 구현

// 2. todo list 처리

function App() {

  // todo list를 state로 변경
  // useState or useReducer
  const [list, setList] = useState([])
  // 사용자가 입력한 내용
  const [content, setContent] = useState('')
  // 다음 id
  const [nextId, setNextId] = useState(1)

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      {/* 입력 필드와 버튼 */}
      <div className="box">
        {/* 버튼을 클릭하면 사용자가 입력한 내용을 todo로 추가 */}
        {/* 입력필드의 value를 state로 변경 */}
        <input type="text" value={content} onChange={(event) => {
          setContent(event.target.value)
        }}></input>
        <button onClick={() => {
          
          // 새로운 TODO 생성
          const newTodo = { id: nextId, content: content }
          // list에 새로운 todo 추가
          list.push(newTodo)

          // 배열은 object로 주소값을 가지고 있음
          // 배열에 새로운 요소를 추가해도 주소값에는 변화가 없음
          // 따라서 state는 업데이트 안됨!

          // 새로운 배열로 카피!
          const newList = [...list]
          setList(newList)
          // todo가 추가됐으면 입력필드 초기화
          setContent('')
          // todo 추가가 끝났으면 nextId를 1만큼 증가
          setNextId(nextId + 1)

        }}>추가</button>
        <button onClick={() => {
          // list 배열 초기화
          setList([])
        }}>초기화</button>
      </div>
      {/* 실제 todo list */}
      {/* 나중에 동적으로 처리할 부분! */}
      {/* {} 안에 변수 또는 식을 넣을 수 있음 */}
      {/* 배열을 사용해서 li 태그 완성하기 */}
      {/* react에서 태그를 동적으로 생성할 때는 key 입력 */}

      {/* 삭제 이벤트 처리 */}
      <ul>
        {list.map((todo) => {
          return (<li key={todo.id}>
            {todo.content}
            <button onClick={() => {
              
              // list에서 선택한 todo를 제거
              const newList = [...list]
              // 배열의 함수를 사용해서 특정 요소만 제거
              // filter 함수는 true가 반환된 요소만 남김
              // 비교연산자의 결과는 boolean
              // todo의 id와 li 태그의 id가 같지 않으면 true
              const filterList = newList.filter(obj => obj.id !== todo.id)
              // 이렇게 구한 배열을 state에 업데이트
              setList(filterList)
            }}>삭제</button>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default App;
