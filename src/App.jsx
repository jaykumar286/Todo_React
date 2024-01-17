import './App.css'

import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo';
import { useState } from 'react';
import {TodoContext} from './context/TodoContext';

function App() {
  const [todoList,setTodoList] =useState([]);
  
  return (
    <>
      <TodoContext.Provider value={{todoList,setTodoList}}>
        <AddTodo />
        <TodoList/>
      </TodoContext.Provider>
    </>
  )
}

export default App
