import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// index.html 파일에서 root라는 id를 가지고 있는 태그 찾기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

