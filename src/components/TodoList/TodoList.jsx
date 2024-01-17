import {TodoContext} from "../../context/TodoContext";
import Todo from "../Todo/Todo";

import {useContext} from "react"

export default function TodoList() {
 
  const {todoList,setTodoList} = useContext(TodoContext);
  console.log(todoList);
  function onDeleteTodo(id){
    const newTodo = todoList.filter((todo)=>todo.id!=id);
    setTodoList(newTodo);
  }

  function onEditTodo(id,text){
    const newTodo = todoList.map(todo=>{
      if(todo.id==id){
         todo.text = text;
      }
      return todo
    });
    setTodoList(newTodo);
  }

  function onIsFinished(id,state){
    const newTodo = todoList.map(todo=>{
      if(todo.id==id){
         todo.isFinished = state;
      }
      return todo
    });
    setTodoList(newTodo);
  }


  return (
    todoList && todoList.map(
      (todo)=><Todo key={todo.id} text={todo.text} isFinished={todo.isFinished} onDeleteTodo={()=>onDeleteTodo(todo.id)} onEditTodo={(text)=>onEditTodo(todo.id,text)} onIsFinished={(state)=>onIsFinished(todo.id,state)}/>
    )
  )
}
