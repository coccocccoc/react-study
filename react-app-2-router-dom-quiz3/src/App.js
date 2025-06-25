import { Link, Route, Routes, useParams } from "react-router-dom"
import './App.css'


function Home() {
  return <div>
    <h2>환영합니다!</h2>
  </div>
}

let info = [
  { id: 'profile', title: '프로필', body: [{ a: '이름: 홍길동' }, { a: '나이: 30세' }] },
  { id: 'hobby', title: '취미', body: [{ a: '독서, 등산, 사진 찍기' }] },
  {id:'contact', title:'연락처', body:[{a:'이메일: hong@example.com'}, {a:'전화: 010-1234-5678'}]}
]

function About() {

  let lis = []
  
  for (let i of info) {
    lis.push(<span key={i.id}><Link to={'/about/' + i.id}>{i.title}</Link></span>)
  }

  return <div>
    <h2>자기소개 페이지</h2>
      {lis}
    <hr></hr>
  </div>
}

// 자기소개 상세
function AboutInfo() {
  const params = useParams()

  let ps = []

  // 자기소개 상세 내용


  return <div>
    <h4>{info.title}</h4>
    {}
  </div>
}

function App() {
  return (
    <div className="App">
      <span><Link to='/'>Home</Link></span>
      <span><Link to='/about'>About</Link></span>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/about/:about_id" element={<AboutInfo></AboutInfo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
