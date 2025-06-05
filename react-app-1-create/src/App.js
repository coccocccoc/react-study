import { useState } from "react";

function Header(props) {

  return (
    <header>
      <h1><a href="/" onClick={
        (event) => {
          event.preventDefault()
          props.onChangeMode()
        }
      }>{ props.title }</a></h1>
    </header>
  );
}

function Nav(props) {

  const lis = [];

  for (let t of props.topics) {
    lis.push(<li key={t.id}><a id={t.id} href={"/read" + t.id} onClick={(event) => {
      event.preventDefault() 
      props.onChangeMode(event.target.id);
    } }>{ t.title }</a></li>)
  }
  return <ol>{ lis }</ol>
}

function Article(props) {
  return (
    <article>
      <h2> { props.title } </h2>
      { props.body }
    </article>
  );
}

// 등록 화면을 반환하는 컴포넌트 추가
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      {/* form 태그 안에서 submit 버튼을 클릭하면 onSubmit 이벤트가 발생함 */}
      <form onSubmit={(event) => {
        
        // 버튼을 클릭했을 때 페이지 이동 막기
        event.preventDefault()

        // 사용자가 입력한 제목과 내용을 꺼내서 topics 배열에 추가

        // props로 전달받은 함수를 호출
        props.onCreate(event.target.title.value, event.target.body.value);

      }}>
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <input type="text" name="body" placeholder="body"></input>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}


function App() {

  const [mode, setMode] = useState("WELCOME");

  const [id, setId] = useState(null)

  let content = null;

  // topics는 일반변수
  // topics를 state로 선언

  const temp = [
    { id: 1, title: "html", body: "html is .." },
    { id: 2, title: "css", body: "css is .." },
    { id: 3, title: "javascript", body: "javascript is .." }
  ];

  const [topics, setTopics] = useState(temp);

  // 새로운 번호를 state로 생성
  const [nextId, setNextId] = useState(4);


  // 모드 추가 (WELCOME, READ, CREATE)
  // CREATE 모드가 되면 등록 화면이 나타남
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === 'READ') {
    let title = null;
    let body = null;

    for (let t of topics) {
      if (t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  } else if (mode === 'CREATE') {
    // 등록을 처리하기 위해
    // onCreate라는 함수를 props에 추가
    // 사용자가 입력한 제목과 내용을 매개변수로 추가
    content = <Create onCreate={(_title, _body) => {
      
      // 사용자가 입력한 제목과 내용을 topics 배열에 추가
      let newTopic = { id: nextId, title: _title, body: _body };
      
      // 배열에 새로운 토픽 추가
      topics.push(newTopic)

      // set 함수로 state 변경
      // setTopics(topics);
      // topics는 배열, 배열은 객체
      // state는 값이 바뀌어야 컴포넌트가 다시 실행됨
      
      // 기존 배열을 새로운 배열로 복사
      // ... => 스프레드 연산자: 배열을 분해
      const newTopics = [...topics];

      // topics state 업데이트
      setTopics(newTopics);
      
      // 새로운 topic이 추가되었으면 id를 1만큼 증가
      setNextId(nextId + 1);

      // 등록이 끝났으면 해당 토픽의 상세페이지로 이동
      setMode('READ')
      // 현재 토픽 아이디 변경
      setId(nextId)

      // nextId를 1만큼 증가
      setNextId(nextId + 1)

    }}></Create>
  }


  return (
    <div className="App">
      <Header title="WEB" onChangeMode={() => {
          setMode('WELCOME')
        }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode('READ')
        setId(id)
        }}></Nav>
      {content}

      {/* 등록페이지로 이동하는 링크 */}
      <a href="/create" onClick={(event) => {
        // 링크를 클릭하면 다른 페이지로 이동함
        // 페이지 이동 막기
        // react는 싱글페이지이기 때문에
        event.preventDefault()
        setMode('CREATE')
      }}>Create</a>

    </div>
  );
}

export default App;
