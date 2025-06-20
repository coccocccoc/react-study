import { Link, Outlet, Route, Routes } from "react-router-dom";
import './App.css'

function Home() {
  return <div>
    <h2>환영합니다!</h2>
  </div>
}

function About() {
  return <div>
    <h2>자기소개 페이지</h2>
    {/* 하위 메뉴 추가 */}
    {/* 1. 링크를 클릭하면 http://localhost:3000/about/profile 로 이동 */}
    <nav>
      <Link to='/about/profile'>프로필</Link>
      <Link to='/about/hobby'>취미</Link>
      <Link to='/about/contact'>연락처</Link>
    </nav>
    <hr />
    {/* 하위 경로에 따라서 컨텐츠를 보여주는 자리 */}
    {/* 'Hobby...'가 Outlet 자리에 들어감 */}
    <Outlet></Outlet>
  </div>
}

function App() {
  return (
    <div className="App">
      {/* 대메뉴 추가 */}
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>

      {/* 페이지 이동 */}
      {/* about 하위 경로 처리 */}
      {/* 전체 라우트에 about에 대한 중첩 라우트 추가 */}
      {/* About 컴포넌트에 있던 하위 라우터를 밖으로 옮기기 */}
      {/* 2. 라우터가 이베트를 감지 */}
      {/* 현재 주소: /about/hobby */}
      {/* /about 상위 경로에 의해  */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}>
          <Route path="profile" element={'Profile...'}></Route>
          <Route path="hobby" element={'Hobby...'}></Route>
          <Route path="contact" element={'Contact...'}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
