
import styled from "styled-components";

// 2. styled component를 사용해서 버튼 만들기

// styled component: css 코드를 그대로 작성할 수 있도록 도와주는 기능

// styled component로 <button> 태그 생성
// styled.태그이름 + ``(백틱)
const SimpleButton = styled.button`
  color: white;
  background-color: purple;
`;

// styled component로 다른 버튼 생성
// 위에 있는 SimpleButton 상속받기
// 새로운 css 추가
// 부모로부터 css를 물려받고, 자식에서 새로운 css를 추가함
// 부모로부터 class를 물려받아서 css가 추가된 것
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// 일반 버튼 생성
const ReactButton = (props) => {
  // 자식인 ReactLargeButton이 생성될 때
  // props로 버튼의 이름과 class 이름이 전달되므로
  // <button> 태그에 class 이름을 적용해야 함
  return <button className={props.className}>{props.children}</button>
}

// styled component 방식으로 버튼 생성
// styled component 방식으로 생성한 태그에는 class 이름이 있어야 함
// 하지만 부모인 ReactButton은 일반 버튼이기 때문에 class 이름이 없음
// 그렇기 때문에 css 적용이 되지 않음
// => styled component 방식으로 생성되었지만 근본적으로 일반 버튼
// styled component에서 일반 태그를 상속받을 때는
// class를 별도로 추가해야 함!
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

// styled component 방식으로 버튼 생성
// 버튼의 속성에 따라 색 변경하기
// 함수가 반환하는 값이 color가 됨
// 버튼에 primary 라는 속성이 있으면 color를 white로 변경
// 없으면 black으로 변경
const PrimaryButton = styled.button`
  color: ${(props) => {
  if (props.primary) {
      return 'white'
  } else {
      return 'black';
    }
    
  }};
`;

function App() {
  return (
    <div className="App">
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>LargeReact</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}

export default App;
