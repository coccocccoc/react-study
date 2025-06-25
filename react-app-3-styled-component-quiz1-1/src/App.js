import { Route, Routes } from "react-router-dom";
import Menu from './component/Menu';
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import './App.css'

function App() {
  return (
    <div className="App">
      {/* 상단에 메뉴바 고정 */}
      <Menu></Menu>
      {/* 링크에 따라서 페이지 이동 */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
