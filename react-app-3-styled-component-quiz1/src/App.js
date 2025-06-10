import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return <div>
    <h2>Home</h2>
    <p>Home Page...</p>
  </div>
}

function About() {
  return <div>
    <h2>About</h2>
    <p>About Page...</p>
  </div>
}

function Contact() {
  return <div>
    <h2>Contact</h2>
    <p>Contact Page...</p>
  </div>
}

function App() {
  return (
    <div className="App">
      <nav>
        <span><Link to={'/'}>Home</Link></span>
        <span><Link to={'/about'}>About</Link></span>
        <span><Link to={'/contact'}>Contact</Link></span>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );  
}

export default App;
