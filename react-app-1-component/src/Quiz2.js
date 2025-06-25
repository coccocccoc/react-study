function Home() {
  return <div>Home</div>
}

function About() {
  return <div>About</div>
}

function Contact() {
  return <div>Contact</div>
}


function App() {
  return (
    <div className="App">
      <h1>Navigation</h1>
      <Home></Home>

      <About></About>

      <Contact></Contact>
    </div>
  );
}

export default App;
