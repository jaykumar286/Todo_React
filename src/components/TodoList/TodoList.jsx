import {TodoContext} from "../../context/TodoContext";
import Todo from "../Todo/Todo";

import {useContext} from "react"

export default function TodoList() {
 
  const {todoList,dispatch} = useContext(TodoContext);
 
  function onDeleteTodo(id){
    dispatch({type:"delete_todo",payload:{id}});
  }

  function onEditTodo(id,text){
    dispatch({type:"edit_todo",payload:{id,text}});
  }

  function onIsFinished(id,state){
    dispatch({type:"delete_todo",payload:{id,state}});
  }

  return (
    todoList && todoList.map(
      (todo)=><Todo key={todo.id} text={todo.text} isFinished={todo.isFinished} onDeleteTodo={()=>onDeleteTodo(todo.id)} onEditTodo={(text)=>onEditTodo(todo.id,text)} onIsFinished={(state)=>onIsFinished(todo.id,state)}/>
    )
  )
}
