import React from "react";

// jsx 문법으로 html 태그를 작성할 때는 하나의 요소만 있어야 함
// 부모 태그로 자식 태그들을 감싸야 함
function Sample() {

  // <></> 빈 태그를 사용해도 됨 (단순히 자식 태그들을 묶는 용도)
  return (
    <>
      <h1>안녕하세요</h1>
      <h1>하이</h1>
    </>
  )
}

function App() {

  return (
    <div className="App">
      <Sample></Sample>
    </div>
  );
} 

export default App;
