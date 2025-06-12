import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from './counterSlice'

// + 버튼을 클릭하면 count가 1만큼 증가
// 근데 count state가 없음
const Counter = () => {

  // store에서 count 꺼내기
  const count = useSelector(state => {
    return state.counter.count
  })

  // redux에서 dispatch 함수 꺼내기
  const dispatch = useDispatch()

  // redux toolkit은 액션 크리에이터 함수를 제공함
  // ex) counterSlice/up => counterSlice.actions.up()

  // + 버튼을 클릭하면 count가 2만큼 증가
  return (
    <>
      {/* 명령을 수정 */}
      <button onClick={() => {

        // dispatch({type:'counterSlice/up', step:2})

        // 작업에 필요한 2는 up 함수의 인자로 전달
        dispatch(counterSlice.actions.up(2))

      }}>+</button> {count}
    </>
  )
}

export default Counter