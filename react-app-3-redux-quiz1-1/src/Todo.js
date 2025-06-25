// 컴포넌트 함수 추가
// todo app과 관련된 코드를 작성

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {

  const [content, setContent] = useState('')
  const [nextId, setNextId] = useState(1)

  // app에서 만든 redux store 불러오기
  // store에서 list 꺼내기
  // 필요한 값을 선택하여 반환
  const list = useSelector(state => state.list)

  // redux에서 dispatch 함수 가져오기
  const dispatch = useDispatch()

  return (
    <>
      <div className="box">
        <input type="text" value={content} onChange={(event) => {
          setContent(event.target.value)
        }}></input>

        {/* 추가 버튼을 클릭하면 list에 todo가 추가됨 */}
        <button onClick={() => {
          dispatch({type:'add', id:nextId, content:content})
          setContent('')
          setNextId(nextId + 1)
        }}>추가</button>

        {/* 초기화 버튼을 클릭하면 list가 초기화 됨 */}
        <button onClick={() => {
          dispatch({type:'reset'})
        }}>초기화</button>
      </div>

      <ul>
        {/* li 태그에 있는 삭제 버튼을 클릭하면 list에서 해당 요소가 제거됨 */}
        {list.map((todo) => {
          return (<li key={todo.id}>{todo.content}<button onClick=
            {() => {
              dispatch({type:'delete', id:todo.id})
            }}>삭제</button>
          </li>)
        })}
      </ul>
    </>
  )
}

export default Todo


// redux store: state 저장소. 컴포넌트 간에 state 공유
// reducer: state를 변경하는 함수
// dispatch: state를 변경하기 위한 명령을 전달하는 함수
// useselector: store에서 state를 꺼내는 함수
