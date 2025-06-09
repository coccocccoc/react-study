// json 파일 불러오기
// json 파일 안에 있는 배열을 movies 라는 변수에 담기
import { Link, Route, Routes, useParams } from 'react-router-dom';
import movies from './movie.json';
import './App.css'

// 영화 메뉴 만들기
function Movies() {
  // 링크 자동으로 생성하기
  
  // 링크를 담을 변수 선언
  let lis = []

  // movies 배열을 사용해서 링크 목록 만들기
  for (let m of movies) {
    lis.push(<li key={m.id}><Link to={'/movie/' + m.id}>{m.title}</Link></li>)
  }

  return <div>
    <ul>
      {lis}
    </ul>
  </div>
}

// 영화 상세 정보
// Movie ID에 따라서 영화정보 표시
function Movie() {

  // URL 주소에서 파라미터 추출
  const params = useParams()

  // 영화 정보를 담을 변수 선언
  let movie = null

  // 반복문이 너무 길어서
  // 배열 함수를 사용해서 간단하게 작성

  // movies는 배열. foreach, map, find 같은 함수를 가지고 있음
  movie = movies.find(m => m.id === Number(params.movie_id))

  // movies 배열에서 id에 해당하는 영화 정보 꺼내기
  // for (let m of movies) {
  //   if (m.id === Number(params.movie_id)) {
  //     movie = m
  //   }
  // }

  // 찾은 데이터를 화면에 표시
  return <div>
    <h2>{ movie.title }</h2>
    <p>{ movie.description }</p>
    <img src={ movie.poster }></img>
  </div>
}

function App() {

  // 실제 사이트에서는 데이터베이스를 연동하여 데이터를 받아올 예정!
  const arr = movies

  return (
    <div className="App">
      {/* 영화 목록 */}
      {/* home과 movies 링크 추가 */}
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
      </ul>

      {/* 라우터 추가 */}
      {/* URL 경로에 따라 페이지 이동 */}
      {/* path: URL 경로 */}
      {/* element: 컴포넌트 또는 텍스트 */}
      {/* /movie/1, /movie/2, /movie/3 처리 */}
      {/* URL에 포함된 파라미터는 :파라미터명으로 처리 */}
      <Routes>
        <Route path='/' element={'Home..'}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='/movie/:movie_id' element={<Movie></Movie>}></Route>
      </Routes>
    </div>
  );
}

export default App;
