import React from "react";


function App() {

  const content = 'Hi'
  const name = '이름을 입력하세요!'

  return (
    // jsx 코드에서 변수를 사용할 때는 {} 중괄호로 표기
    <div className="App">
      {content}
      <input placeholder={name}></input>
    </div>
  );
} 

export default App;
