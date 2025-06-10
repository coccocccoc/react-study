import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// route 사용 준비
// 최상위 app 컴포넌트를 route로 감싸기
// 이제 app 컴포넌트와 하위 컴포넌트에서 route를 사용할 수 있음

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

