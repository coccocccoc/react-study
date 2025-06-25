
// 1. UI 구현

import { useState } from "react";

// 2. 이벤트 처리
function App() {

  // 숫자를 state로 생성
  // state 생성시 초기값 필수
  const [num1, setNum1] = useState(null)
  const [num2, setNum2] = useState(null)
  // 연산자를 state로 생성
  const [oper, setOper] = useState(null)
  // 전체 식을 state로 관리
  // 식은 숫자 또는 연산자를 선택했을 때 함께 업데이트
  const [input, setInput] = useState('')
  // 결과값을 state로 생성
  const [result, setResule] = useState(null)

  // number state를 처리하는 함수
  function setNumber(number) {
    // 비즈니스 로직 필요
    // 사용자가 숫자를 선택하면 num1과 num2가 변경됨
    // 첫번째로 저장한 숫자는 num1에 저장
    // 두번째로 저장한 숫자는 num2에 저장
    // 첫번째와 두번째 타이밍은 어떻게 구분?

    // input(식) state 업데이트
    // 숫자와 연산자의 조합
    // 현재 식에 새로운 num 더하기
    setInput(input + number)

    // num state 업데이트
    if (oper === null) {
      // 연산자가 입력이 되어있으면 num2를 저장하고,
      // 그렇지 않으면 num1을 저장
      setNum1(number);
    } else {
      setNum2(number);
    }
  }

  function setOperation(op) {
    // 식 업데이트
    // 현재 식에 연산자 추가. 교체 x

    // 현재 식 + 연산자
    setInput(input + op)
    setOper(op); // oper state 업데이트
  }

  // 결과값을 구하는 이벤트 함수
  function calculate() {
    let tempResult = 0;

    // 연산자에 따라서 계산
    // oper: + - * /
    switch (oper) {
      case "+":
        tempResult = num1 + num2;
        break;
      case "-":
        tempResult = num1 - num2;
        break;
      case "*":
        tempResult = num1 * num2;
        break;
      case "/":
        tempResult = num1 / num2;
        break;
      default:
        tempResult = 0;
    }
    setResule(tempResult);
  }

  // 초기화 이벤트 함수
  function reset() {
    // 모든 state를 초기화
    setNum1(null);
    setNum2(null);
    setOper(null);
    setInput("");
    setResule(null);
  }

  return (
    <div className="App">
      <h3>계산기</h3>

      <div>식: {input}</div>
      <div>결과: {result}</div>

      {/* 1 ~ 0 숫자 버튼 10개 생성 */}
      <div>
        {/* {} 중괄호: 변수 또는 식을 작성하기 위한 표기법 */}
        {/* map 함수: 배열의 요소를 하나씩 꺼내면서 반복 작업 수행 */}
        {/* 엘리먼트를 동적으로 생성할 때는 key 속성이 있어야 함 */}
        {
          // 사용자가 숫자키를 누르면 state가 변경됨
          // 모든 숫자키에 이벤트 적용
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
            return (
              <button
                key={num}
                onClick={() => {
                  // 사용자가 선택한 숫자를 number state에 저장
                  // state 직접 수정 x. 이벤트 함수를 통해서 수정
                  setNumber(num);
                }}
              >
                {num}
              </button>
            );
          })
        }
      </div>

      <div>
        {
          // 사용자가 연산자를 선택하면 state가 변경됨
          ["+", "-", "*", "/"].map((op) => {
            return (
              <button
                key={op}
                onClick={() => {
                  setOperation(op);
                }}
              >
                {op}
              </button>
            );
          })
        }
      </div>

      {/* 계산 버튼 */}
      <button onClick={calculate}>=</button>
      {/* 초기화 버튼 */}
      <button onClick={reset}>C</button>
      
    </div>
  );
}

export default App;
