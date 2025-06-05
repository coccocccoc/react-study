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
      // 엘리먼트의 속성인 id를 꺼냈기 때문에 string 값으로 반환됨
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

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(event) => {
        
        event.preventDefault()
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

// 수정 화면을 반환하는 컴포넌트 추가
// 외부에서 전달받은 props 받기
function Update(props) {
  // props는 부모 컴포넌트에서 전달받은 데이터이기 때문에 자식 컴포넌트에서 수정할 수 없음

  // title과 body를 state로 생성
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)

  return (
    <article>
      <h2>Update</h2>
      {/* submit 버튼을 클릭하면 onSubmit 이벤트 발생 */}
      <form onSubmit={(event) => {
        event.preventDefault()
        // 부모한테 전달받은 함수를 호출
        props.onUpdate(event.target.title.value, event.target.body.value);
      }}>
        <p>
          {/* 입력필드에 이벤트 추가 */}
          {/* 사용자가 내용을 수정하면 onChange 이벤트가 발생 */}
          <input type="text" name="title" placeholder="title" value={title} onChange={(event) => {
            // console.log(event.target.value)
            // title은 state. state는 set 함수로 수정
            setTitle(event.target.value);
          }}></input>
        </p>
        <p>
          <input type="text" name="body" placeholder="body" value={body} onChange={(event) => {
            setBody(event.target.value);
          }}></input>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}

function App() {

  const [mode, setMode] = useState("WELCOME");

  const [id, setId] = useState(null)

  let content = null;

  // 상세 조회 모드일 때만 수정 링크를 표시
  let contextControl = null;

  const temp = [
    { id: 1, title: "html", body: "html is .." },
    { id: 2, title: "css", body: "css is .." },
    { id: 3, title: "javascript", body: "javascript is .." }
  ];

  const [topics, setTopics] = useState(temp);

  const [nextId, setNextId] = useState(4);

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

    // 상세조회(READ) 모드일때 contextControl에 링크 달기
    // 링크를 클릭하면 수정화면이 나타남
    contextControl = <li><a href={"/update" + id}
      onClick={(event) => {
        event.preventDefault()
        // 모드 변경
        setMode('UPDATE')
    }}>Update</a></li>

  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {    
      let newTopic = { id: nextId, title: _title, body: _body };
      topics.push(newTopic)
      const newTopics = [...topics];
      setTopics(newTopics);
      setNextId(nextId + 1);
      setMode('READ')
      setId(nextId)
      setNextId(nextId + 1)
    }}></Create>
  } else if (mode === 'UPDATE') {
    // 모드가 UPDATE라면 본문에 수정화면을 표시
    // props로 topic 정보를 전달

    // topics 배열에서 현재 토픽 정보 찾기

    let title = null;
    let body = null;

    for (let t of topics) {
      if (t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }
    
    // props로 topic 정보를 전달
    // props: 컴포넌트 속성. 부모 -> 자식 데이터 전달할때 사용
    // 사용자가 변경한 내용을 topics 배열에 업데이트
    // props로 onUpdate 함수를 전달
    content = <Update title={title} body={body}
      onUpdate={(_title, _body) => {

        // 사용자가 수정한 topic 정보를 topics 배열에 업데이트
        // 토픽 새로 만들기
        const newTopic = { id: Number(id), title: _title, body: _body }
        
        // topics 배열에서 기존 토픽 업데이트
        // for of: 배열의 요소를 하나씩 꺼냄
        // for in: 배열의 인덱스를 하나씩 꺼냄
        for (let i in topics) { // i: 0, 1, 2
          if (topics[i].id === Number(id)) {
            // 배열의 요소를 교체
            topics[i] = newTopic;
          }
        }
        // 배열을 복사해서 새로운 배열로 생성
        const newTopics = [ ...topics ]

        // topics state 업데이트
        setTopics(newTopics);

        // 수정이 끝났으면 상세조회 모드로 변경
        setMode('READ')

      }
    }></Update>
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

      <ul>
        <li>
          <a href="/create" onClick={(event) => {
            event.preventDefault()
            setMode('CREATE')
          }}>Create</a>
        </li>
        {/* read 모드일 때만 보임 */}
        {/* 이외에는 null */}
        {contextControl}
      </ul>
      

      

    </div>
  );
}

export default App;
