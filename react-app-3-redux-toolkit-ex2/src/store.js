import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

  // 2. store 생성
  // 여러 slice를 모아서 하나의 store 생성
  // ex) counterSlice, todoSlice ...

  const store = configureStore({
    reducer: {
      // key-slice 이름, value
      counter: counterSlice.reducer
    }
  })

// 외부에서 사용할 수 있도록 store 내보내기
export default store;