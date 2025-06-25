
// 카운트 앱 구현

import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";

// app 컴포넌트에서 count 관련코드 분리


function App() {

  // count state를 관리하는 redux store 만들기

  // 1. reducer 함수 만들기
  // up 명령이 들어오면 state 중에서 count를 증가시키기
  function reducer(oldState, action) {

    // 기존 state를 복사하여 새로운 object로 생성
    const newState = {...oldState}

    // state 중에서 count만 변경
    if (action.type === 'up') {
      // count를 2만큼 증가 시키기
      newState.count = newState.count + action.step
    }

    // 새로운 state를 반환 => 교체
    return newState
  }

  // 2. store 초기값
  const init = { count: 0 }
  
  // 3. store 생성
  const store = createStore(reducer, init)
  
  // 하위 컴포넌트를 Provider로 감싸고 store 주입
  return (
    <div className="App">
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
