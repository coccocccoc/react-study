import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import store from './store/store';
import { Provider, useDispatch } from 'react-redux';
import {login} from './store/memberSlice'

// context 저장소 생성
// Context: 여러 컴포넌트에서 값을 공유할 때 사용
// store, slice: 여러 컴포넌트에서 상태(state)를 공유할 때 사용
export const Context = createContext()

// const host = 'http://localhost:8080'
const host = 'http://15.164.165.239:8080'


// 화면이 새로고침 되었을 때 로그인 상태 유지하기

// redux dispatch 함수 가져오기
const dispatch = store.dispatch

// 1. 로컬 스토리지에서 로그인 데이터 꺼내기
const user = localStorage.getItem('user')
const token = localStorage.getItem('token')

// 2. 로그인 데이터가 있다면 다시 로그인 처리
// user 데이터는 다시 object로 변환
if (user != null) {
    const userObj = JSON.parse(user)

    // dispatch를 이용해 리듀서 함수 호출
    // 로그인 작업에 필요한 데이터를 함께 전달
    dispatch(login({token:token, user:userObj}))
}


// 하위 컴포넌트에서 store를 사용할 수 있도록 주입
// router 기능 활성화
// 최상위 컴포넌트를 router로 감싸줌
// 하위 컴포넌트들에게 저장소를 공유
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{ host }}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Context.Provider>
);
