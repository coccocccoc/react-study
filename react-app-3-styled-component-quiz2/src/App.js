import { useState } from "react";
import styled from "styled-components";

const icecream = [
  { id: 1, name: '바닐라', color:'#fdf3d3' },
  { id: 2, name: '초코', color: '#d2b48c' },
  { id: 3, name: '딸기', color: '#ffc0cb' }
]

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const Card = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
`

function App() {

  const [select, setSelect] = useState(null);

  let message;
  if (select) {
    const selectedIce = icecream.find(i => i.id === select);
    message = `선택한 아이스크림: ${selectedIce.name}`;
  } else {
    message = '아직 선택하지 않았어요';
  }

  return (
    <div className="App">
      <h2>아이스크림을 골라보세요</h2>
      <Container>
        {icecream.map((ice) => (
          <Card key={ice.id} bgColor={ice.color} onClick={() => setSelect(ice.id)}>
            {ice.name}
          </Card>
        ))}
      </Container>
      <span>{message}</span>
    </div>  
  );
}

export default App;
