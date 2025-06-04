function Content() {
  return <div>Content Component</div>;
}

function Section(){
  return <>
    <h1>Section Component</h1>
    <Content></Content>
    <Content></Content>
  </>
}


function App() {
  return (
    <div className="App">
      <Section></Section>
      <Section></Section>
    </div>
  );
}

export default App;
