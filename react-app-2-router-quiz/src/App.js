import { NavLink, Route, Routes, useParams } from "react-router-dom";
import movies from './movies.json';

function Home() {
  return <div>
    <h1>Welcome</h1>
    Welcome...
  </div>
}


function Movie() {
  let params = useParams()

  let movie = { title: 'Sorry', description: 'Not found', poster: '' }
  
  for (let m of movies){
    if (m.id === Number(params.movie_id)) {
      movie = m
    }
  }

  return <div>
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
    <img src={movie.poster}></img>
  </div>
}

function Movies() {
  let lis = []

  for (let m of movies){
    lis.push(<li key={m.id}><NavLink to={'/movies/' + m.id}>{m.title}</NavLink></li>)
  }

  return <div>
    <h2>Movies List</h2>
    <ul>
      {lis}
    </ul>
    <Routes>
      <Route path="/:movie_id" element={<Movie></Movie>}></Route>
    </Routes>
  </div>
}

function App() {
  return (
    <div className="App">

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Movies/*" element={<Movies></Movies>}></Route>
        <Route path="/*" element={"Not Found"}></Route>
      </Routes>

    </div>
  );
}



export default App;
