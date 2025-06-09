
// 컴포넌트 만들기

import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import './App.css';

// a 태그를 사용하면 링크를 클릭할 때
// index.html 파일을 다시 불러옴
// 이때, 모든 컴포넌트를 다시 생성하면서 메모리 낭비가 발생함

// 컴포넌트: 사용자 정의 태그
function Home() {
  return <div>
    <h2>Home</h2>
    Home...
  </div>;
}

let topics = [
  { id: 1, title: "HTML", body: "HTML is ..." },
  { id: 2, title: "CSS", body: "CSS is ..." },
  { id: 3, title: "JS", body: "JS is ..." }
];

// 특정 Topic 컴포넌트 추가
function Topic() {

  // URL에서 파라미터 꺼내기
  let params = useParams()

  // 토픽을 저장할 변수
  let selected_topic = {title:'Sorry', body:'Not found'}

  // topics 배열에서 해당 토픽 꺼내기
  for (let t of topics) {
    // 배열의 토픽 아이디와 현재 토픽 아이디를 비교
    console.log(t.id, params.topic_id)
    if (t.id === Number(params.topic_id)) {
      selected_topic = t
    }
  }


  return <div>
    <h3>{selected_topic.title}</h3>
    {selected_topic.body}
  </div>
}

// 자식 컴포넌트 추가
// HTML, JS, CSS
function Topics() {
  
  // li 태그를 담을 변수 선언
  let lis = []

  // topics 배열을 사용해서 링크 생성
  for (let t of topics) {
    lis.push(<li key={t.id}><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li>)
  }


  return <div>
    <h2>Topics</h2>

    {/* 각 하위 페이지로 이동하는 링크 */}
    <ul>
      {lis}
    </ul>

    {/* 각 링크를 처리하는 Route 추가 */}
    {/* 자식 컴포넌트에 있는 라우터에서는 상세주소만 처리 */}
    {/* /Topics 생략 가능 */}
    <Routes>
      {/* URL 경로 처리 */}
      {/* /topics/1 /topics/2 => 파라미터 처리 */}
      <Route path="/:topic_id" element={<Topic></Topic>}></Route>
    </Routes>

  </div>;
}

function Contact() {
  return <div>
    <h2>Contact</h2>
    Contact...
  </div>;
}

// Link 컴포넌트는 URL 주소만 바뀌고, request 발생은 안됨
// 따라서 링크를 클릭해도 페이지 리로드가 안됨
// 기존 html 문서에서 특정 컴포넌트만 다시 생성됨

function App() {
  return (
    <div className="App">
      <h1>Hello React Router DOM</h1>

      {/* a 태그 -> Link 컴포넌트 */}
      {/* 각 페이지로 이동하는 링크 */}
      {/* Link -> NavLink */}
      {/* NavLink의 기능 */}
      {/* Link에 부가기능이 추가됨 */}
      {/* 현재 주소에 따리 active라는 class가 추가됨 */}
      {/* 현재 위치 표시 가능 */}
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Topics'>Topics</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
      </ul>

      {/* 라우트 만들기 */}
      {/* 존재하지 않는 페이지 처리 */}

      {/* 부모 컴포넌트에서 topics에 대한 URL 처리 */}
      {/* tipics와 관련된 경로가 여러개 일때 */}
      {/* /topics/1 /topics/2 /topics/3 */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Topics/*" element={<Topics></Topics>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/*" element={"Not Found"}></Route>
      </Routes>

      {/* 링크(a태그)를 클릭하면 해당 페이지로 이동.
          링크에 의해 URL 주소가 변경됨.
          이 때 라우트는 바뀐 주소를 감지함.
          현재 URL 주소에 맞는 컴포넌트를 생성.
      */}
    </div>
  );
}

export default App;
