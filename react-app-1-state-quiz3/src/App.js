import { useState } from "react";

function App() {

  // 텍스트의 컬러
  // 일반 변수의 값이 바뀌어도 화면에는 영향x
  // 컬러를 일반 변수가 아닌 state로 선언해야 함
  // color가 바뀌면 화면이 업데이트 됨
  let [color, setColor] = useState("gray");

  // 이벤트 함수 정의
  function changeColor(color) {
    setColor(color)
  }

  return (
    <div className="App">
      {/* 버튼과 텍스트 */}
      <button onClick={() => changeColor("red")}>빨강</button>
      <button onClick={() => changeColor("green")}>초록</button>
      <button onClick={() => changeColor("blue")}>파랑</button>
      <span style={{ color: color }}>안녕하세요</span>
    </div>
  );
}

export default App;
