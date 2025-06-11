
// 1. 계산기 앱 만들기 - 화면 구현

import { useState } from "react";

// 2. 식 만들기

function App() {

  // 식에 포함되는 것: 숫자 2개, 연산자

  // 숫자, 연산자, 식을 state로 생성
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState(null) // 연산자
  // 식에 숫자와 연산자를 연결해야하기 때문에 식의 초기값은 빈 문자열
  const [input, setInput] = useState('') // 식
  const [result, setResult] = useState(0) // 결과

  // 식이 업데이트 되는 시기
  // 숫자 또는 연산자를 클릭했을 때

  // 이벤트 함수 정의
  // 매개변수: 사용자가 선택한 숫자
  function changeNumber(num) {
    // 첫번째로 선택한 숫자는 num1
    // 두번째로 선택한 숫자는 num2
    // 상황을 어떻게 구분할지?
    // 연산자를 선택한 후라면 num2, 그렇지 않다면 num1

    // 식도 함께 업데이트
    setInput(input + num) // 기존 식에 숫자를 연결
    
    if (operator == null) { // 연산자 선택 x
      setNum1(num)
    } else { // 연산자 선택 o
      setNum2(num)
    }
  }

  function calc() {
    let temp = 0

    // 연산자 종류에 따라 다르게 계산
    // 조건문 -> switch
    // 조건: 변수
    switch (operator) {
      case '+':
        temp = num1 + num2
        break;
      case '-':
        temp = num1 - num2
        break;
      case '*':
        temp = num1 * num2
        break;
      case '/':
        temp = num1 / num2
        break;
      default:
        temp = 0
    }
    // 결과 업데이트
    setResult(temp)
  }

  // reset 이벤트 함수 정의
  function clear() {
    // 모든 state 초기화
    setNum1(0)
    setNum2(0)
    setOperator(null)
    setInput('')
    setResult(null)
  }

  return (
    <div className="App">
      <h2>계산기</h2>
      <div>
        <div>식: {input}</div>
        <div>결과: {result}</div>
      </div>
      {/* 버튼을 클릭하면 num state가 변경됨 */}
      <div>
        {/* 1 ~ 0 까지 숫자 버튼 */}
        {/* 중괄호: 변수 또는 식을 작성할 수 있음 */}
        {/* 배열 함수를 사용해서 버튼 10개를 자동으로 생성 */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
          return <button key={num} onClick={() => {
            changeNumber(num)
          }}>{num}</button>
        })}
      </div>
      {/* 버튼을 클릭하면 operator state가 변경됨 */}
      <div>
        {/* 연산자 버튼 */}
        {['+', '-', '*', '/'].map((op) => {
          return <button key={op} onClick={() => {
            setInput(input + op)
            setOperator(op)
          }}>{op}</button>
        })}
      </div>
      <div>
        <button onClick={ calc }>=</button>
        <button onClick={clear}>C</button>
      </div>

    </div>
  );
}

export default App;
