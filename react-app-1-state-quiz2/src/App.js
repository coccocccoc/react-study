import { useState } from "react";

function App() {

  // 글자수를 저장할 변수
  // 변수의 값이 바뀌어도 화면에는 영향 x
  // 글자수를 변수가 아닌 state로 선언
  // 첫번째 요소는 현재 state, 두번째 요소는 state를 변경하느 ㄴ함수
  // 첫번째 요소는 read only
  let [count, setCount] = useState(0);

  // 1. UI 구성
  return (
    <div className="App">
      {/* 사용자가 텍스트를 입력하면 이벤트 발생 */}
      <input type="text" onChange={(event) => {
        // event.target: 이벤트가 발생된 엘리먼트(input 필드)
        setCount(event.target.value.length);
      }}></input>
      <p>글자 수: {count}</p>
    </div>
  );
}

// export: 다른 파일에서 사용할 수 있도록 내보내기
export default App;
