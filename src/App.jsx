import './App.css'

import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo';
import { useReducer } from 'react';
import {TodoContext} from './context/TodoContext';
import TodoReducer from './reducer/TodoReducer';

function App() {
  const [todoList,dispatch] =useReducer(TodoReducer,[]);
  
  return (
    <>
      <TodoContext.Provider value={{todoList,dispatch}}>
        <AddTodo />
        <TodoList/>
      </TodoContext.Provider>
    </>
  )
}

export default App
