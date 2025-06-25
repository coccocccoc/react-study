import { useState } from "react";

function Number() {
  return (
    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
    </div>
  );
}

function Operator() {
  return (
    <div>
      <button>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
    </div>
  );
}

function App() {

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);




  
  return (
    <div className="App">

      <h1>계산기</h1>

      <div>식: {input}</div>
      <div>결과: {result}</div>

      <Number></Number>

      <Operator></Operator>

      <div>
        <button>=</button>
        <button>C</button>
      </div>

    </div>
  );
}

export default App;
