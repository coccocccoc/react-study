import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { todoSlice } from './App'

const Todo = () => {

  const [content, setContent] = useState('')
  const [nextId, setNextId] = useState(1)
  const dispatch = useDispatch()
  const list = useSelector((state) => {
    return state.todo.list
  })


  return (
    <>
      <div className="box">
        <input type="text" value={content} onChange={(event) => {
          setContent(event.target.value)
        }}></input>

        {/* 추가 버튼을 클릭하면 list에 todo가 추가됨 */}
        <button onClick={() => {
          dispatch(todoSlice.actions.add({id:nextId, content:content}))
          setContent('')
          setNextId(nextId + 1)
        }}>추가</button>

        {/* 초기화 버튼을 클릭하면 list가 초기화 됨 */}
        <button onClick={() => {
          dispatch(todoSlice.actions.reset())
        }}>초기화</button>
      </div>

      <ul>
        {/* li 태그에 있는 삭제 버튼을 클릭하면 list에서 해당 요소가 제거됨 */}
        {list.map((todo) => {
          return (<li key={todo.id}>{todo.content}<button onClick=
            {() => {
              dispatch(todoSlice.actions.delete({id:todo.id}))
            }}>삭제</button>
          </li>)
        })}
      </ul>
    </>
  )
}

export default Todo