import { useState } from 'react';
import './App.css';

// 1. 카운터 앱 만들기

// 2. 이벤트 처리
// - 버튼 클릭: 1만큼 감소
// 0 버튼 클릭: 0으로 초기화
// + 버튼 클릭: 1만큼 증가

// 3. useState -> useReducer로 변경
// reducer: state를 더 체계적으로 관리하는 도구 (근본적으로는 state를 사용하는 것임)

function App() {

  // state는 값이 바뀌면 컴포넌트를 다시 호출하여 화면을 그림
  // 숫자를 담을 변수
  // 변수의 값이 바뀌어도 화면에는 변화가 없음
  // 화면은 App 컴포넌트가 실행될때 바뀜
  // 변수를 state로 변경
  // count: 현재 state. read only
  // setCount: state를 변경하는 함수
  const [count, setCount] = useState(0);

  // 이벤트 함수 정의
  function down() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  function up() {
    setCount(count + 1)
  }

  // 버튼을 클릭하면 이벤트가 발생
  return (
    <div className="App">
      {/* 버튼과 숫자 */}
      <button onClick={down}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={up}>+</button>
      <span>{count}</span>
    </div>
  );
}

export default App;
