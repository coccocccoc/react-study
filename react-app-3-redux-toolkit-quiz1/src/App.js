import './App.css'
import Todo from './Todo';
import { Provider } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: { list:[] },
  reducers: {
    'add': (state, action) => { state.list.push({id:action.payload.id, content:action.payload.content}) },
    'delete': (state, action) => { state.list = state.list.filter(todo => todo.id !== action.payload.id) },
    'reset': (state, action) => { state.list = [] }
  }
})

function App() {

  const store = configureStore({
    reducer: {
      todo: todoSlice.reducer
    }
  })

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;
