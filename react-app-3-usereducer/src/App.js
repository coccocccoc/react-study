import { useReducer, useState } from 'react';
import './App.css';

// 1. 카운터 앱 만들기

// 2. 이벤트 처리
// - 버튼 클릭: 1만큼 감소
// 0 버튼 클릭: 0으로 초기화
// + 버튼 클릭: 1만큼 증가

// 3. useState -> useReducer로 변경
// reducer: state를 더 체계적으로 관리하는 도구 (근본적으로는 state를 사용하는 것임)

// 4. 입력한 값 만큼 변경시키기
function App() {
  
  // 사용자가 입력한 숫자를 저장할 변수
  // 리듀서는 state를 관리하는 함수이기 때문에 일반변수가 바뀌어도 영향 x
  let [num, setNum] = useState(0)

  // 리듀서 함수 만들기
  // 인자: 이전 state값, 액션(명령)
  // state를 한 곳에서 관리
  function countReducer(oldState, action) {

    // state를 바꿀 때 1 대신 사용자가 입력한 값을 사용
    
    console.log(action.type)
    console.log(action.num)

    //  액션에 따라 state값을 변경
    if (action.type === 'UP') {
      return oldState + action.num
    } else if (action.type === 'DOWN') {
      return oldState - action.num
    } else if (action.type === 'RESET') {
      return 0
    }
  }

  // useState 대신 useReducer 함수 사용
  // 인자: 리듀서 함수, state 초기값
  // 반환값: 현재 state, dispatch라는 함수
  const [count, countDispatch] = useReducer(countReducer, 0)
  
  // 다시 이벤트 함수 정의
  // setCount는 state를 직접 변경
  // dispatch는 리듀서함수를 통해서 우회적으로 state를 변경
  // dispatch 함수를 통해서 명령과 값을 전달
  function down() {
    // count를 1만큼 감소
    // 기존에는 setCount를 사용했지만 이제 countDispatch를 사용
    // dispatch 함수로 명령을 전달 
    // countDispatch('DOWN')
    countDispatch({type:'DOWN', num:num})
  }

  function reset() {
    // countDispatch('RESET')
    countDispatch({type:'RESET', num:num})
  }

  function up() {
    // countDispatch('UP')
    countDispatch({type:'UP', num:num})
  }

  // 버튼을 클릭하면 이벤트가 발생
  return (
    <div className="App">
      {/* 버튼과 숫자 */}
      <button onClick={down}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={up}>+</button>
      {/* 사용자가 입력한 값을 다시 value로 넣어야 함 */}
      <input type='text' value={num} onChange={(event) => {
        // state를 바꿀 때는 set 함수를 사용
        // num = event.target.value
        // String -> Number
        setNum(Number(event.target.value))
      }}></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
