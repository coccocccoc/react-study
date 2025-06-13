
// 카운트 앱 구현

import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./store";

// app 컴포넌트에서 count 관련코드 분리

  // redux toolkit
  // 스토어를 기능별로 관리할 수 있음 (ex: counter, todo)
  // state를 복제하여 관리할 필요가 없음..

function App() {

  // 하위 컴포넌트를 Provider로 감싸고 store 주입
  return (
    <div className="App">
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
