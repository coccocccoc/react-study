
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css'


let menus = [
  { id: 'americano', title: '아메리카노', body: '진하고 깔끔한 에스프레소 커피입니다.' },
  { id: 'latte', title: '라떼', body: '우유가 부드럽게 섞인 커피입니다.' },
  { id: 'cappuccino', title: '카푸치노', body: '거품이 풍성하고 진한 커피입니다.' }
];


// 커피 메뉴
function Menus() {
  let lis = []

  for (let m of menus) {
    lis.push(<li key={m.id}><Link to={'/menu/' + m.id}>{m.title}</Link></li>)
  }

  return <div>
    <h2>커피 메뉴</h2>
    <ul>
      {lis}
    </ul>
  </div>
}

// 커피 메뉴 상세
function Menu() {
  const params = useParams()

  let menu = {title:'null', body:'null'}

  for (let m of menus){
    if (m.id === params.menu_id) {
      menu = m
    }
  }

  return <div>
    <h2>{menu.title}</h2>
    <p>{menu.body}</p>
  </div>

}

function Home() {
  return <div>
    <h2>커피 주문 앱입니다.</h2>
  </div>
}



function App() {
  return (
    <div className="App">
      <span><Link to="/">Home</Link></span>
      <span><Link to="/menu">Menu</Link></span>
      

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/menu' element={<Menus></Menus>}></Route>
        <Route path='/menu/:menu_id' element={<Menu></Menu>}></Route>
      </Routes> 
      


    </div>
  );
}

export default App;
