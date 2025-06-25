import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// 최상위 App 컴포넌트를 Router로 감싸면
// App과 하위 컴포넌트에서 Route 기능을 사용할 수 있다

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

