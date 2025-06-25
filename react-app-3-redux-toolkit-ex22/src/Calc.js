import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcSlice } from "./App";

const Calc = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  // redux store에서 result state 꺼내기
  // 이제 store에 slice가 추가되어 slice를 먼저 꺼내고 state를 꺼내야 함
  const result = useSelector((state) => {
    return state.calc.result
  });

  function changeNumber(num) {
    setInput(input + num);

    if (operator == null) {
      setNum1(num);
    } else {
      setNum2(num);
    }
  }

  // result state도 action 함수로 수정
  function clear() {
    setNum1(0);
    setNum2(0);
    setOperator(null);
    setInput("");
    // dispatch({ type: "clalSlice/0" });
    dispatch(calcSlice.actions[0]);
  }

  return (
    <>
      <div>식 : {input}</div>
      <div>결과 :{result}</div>

      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
          return (
            <button key={num} onClick={() => {
                changeNumber(num);
              }}>{num}</button>
          );
        })}
      </div>

      <div>
        {["+", "-", "*", "/"].map((op) => {
          return (
            <button key={op} onClick={() => {
                setInput(input + op);
                setOperator(op);
              }}>{op}</button>
          );
        })}
      </div>

      <div>
        {/* 계산 버튼(=)을 클릭하면 결과값이 바뀜 */}
        {/* action은 slice 이름/명령으로 수정 */}
        {/* ex) calcSlice/+, calcSlice/- */}
        {/* toolkit은 action 함수를 자동으로 생성함 */}
        <button onClick={() => {
          // dispatch({ type: 'calcSlice/'+operator, num1: num1, num2: num2 });
          
            // 인자: 작업에 필요한 두 숫자
            dispatch(calcSlice.actions[operator]({num1: num1, num2: num2}))
          }}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </>
  );
};

export default Calc;
