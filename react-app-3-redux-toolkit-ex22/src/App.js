
import { configureStore, createSlice } from "@reduxjs/toolkit";
import Calc from "./Calc"
import { Provider } from "react-redux";

// redux => redux toolkit 으로 변경

// slice를 먼저 생성하고 slice 여러개를 모아서 store 생성
// slice: 특정 기능에 필요한 state만 저장


// redux toolkit의 기능
// 기존의 reducer는 state의 불변성을 유지하기 위해
// state를 복제한 다음에 사용했음
// 하지만 toolkit에서는 state를 바로 사용할 수 있음

// 1. 계산기에 필요한 slice 생성
// 인자: 슬라이스 이름, state 초기값, reducer 함수
export const calcSlice = createSlice({
  name: 'calcSlice',
  initialState: { result: null },
  // state를 변경하는 함수들
  // action 이름: 처리할 함수
  reducers: {
    // state 중에서 result의 값을 변경하기
    // '+' 명령이 들어오면 두 숫자를 더함
    // 인자: 현재 state 값, 액션(명령과 작업에 필요한 데이터)
    // 현재 state 중에서 result 값 변경하기
    '+': (state, action) => { state.result = action.payload.num1 + action.payload.num2 },
    '-': (state, action) => { state.result = action.payload.num1 - action.payload.num2 },
    '*': (state, action) => { state.result = action.payload.num1 * action.payload.num2 },
    '/': (state, action) => { state.result = action.payload.num1 / action.payload.num2 },
    // result 초기화
    '0': (state, action) => { state.result = null }
  }
})

function App() {

  // slice를 모아서 store 만들기
  const store = configureStore({
    // slice 이름: reducer
    reducer: {
      calc: calcSlice.reducer
    }
  })

  return (
    <div className="App">
      <h2>계산기</h2>
      {/* redux의 provider로 store 주입 */}
      {/* 이제 하위 컴포넌트에서 store 사용 가능 */}
      <Provider store = {store}>
        <Calc></Calc>
      </Provider>
    </div>

  );
}

export default App;
