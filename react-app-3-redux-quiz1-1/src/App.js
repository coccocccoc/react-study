import { useReducer, useState } from 'react';
import './App.css'
import { type } from '@testing-library/user-event/dist/type';
import Todo from './Todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// app 컴포넌트에서 todo와 관련된 코드를 분리

function App() {

  // state 목록: list content nextid
  // redux 스토어로 관리할 대상: list 
  
  // reducer 함수: state를 체계적으로 변경하는 함수
  function reducerList(oldState, action) {

    // 현재 state: object
    // state는 object로 list가 포함되어 있음
    // console.log(oldState)

    // 기존 state를 복사하여 새로운 object로 생성
    const newState = {...oldState}
    
    if (action.type === 'add') {

      // state 중에서 lsit를 꺼내고 새로운 todo 추가
      const newTodo = { id: action.id, content: action.content }
      newState.list.push(newTodo)

    } else if (action.type === 'delete') {

      // 기존 list에서 선택한 요소만 제거
      const filterList = newState.list.filter((todo) => {
        return todo.id !== action.id
      })

      // state 중에서 list를 교체
      newState.list = filterList

    } else if (action.type === 'reset') {

      // state 중에서 list만 빈 배열로 초기화
      newState.list = []

    }

    // 새로운 state를 반환 => state가 교체됨
    return newState
  }

  // redux store 만들기
  // 인자: 리듀서 함수, state 초기값
  // 반환: store

  // redux store: state 목록. state를 여러개 저장하는 저장소
  const init = { list: [] }
  
  const store = createStore(reducerList, init)

  // app에 todo 컴포넌트 추가
  // app에서 만든 store를 todo에서 사용하고 싶음..
  // 하위 컴포넌트를 redux의 Provider로 감싸고 store 주입
  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;
