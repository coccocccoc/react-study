import { createSlice } from "@reduxjs/toolkit"

// 1. slice 만들기
// slice: 기능별로 사용하는 작은 스토어
// 인자: 슬라이스 이름, state 초기값, reducer 함수

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { count: 0 },
  // up이라는 명령이 들어왔을 때 처리할 코드
  // up이라는 명령이 들어오면, state 중에서 count를 1만큼 증가
  // 기존 코드에서는 이전 state 값을 유지하기 위해 oldState를 카피하여 사용했지만 
  // toolkit에서는 stat를 바로 사용할 수 있음
  reducers: {
    up: (state, action) => {
      // action 함수의 인자는 payload라는 값으로 전달됨
      state.count = state.count + action.payload
    }
  }
})