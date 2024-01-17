import { useState,useContext} from "react"
import {TodoContext} from "../../context/TodoContext";

export default function AddTodo() {
    const [todo,setTodo] = useState('');
    const {todoList,setTodoList} = useContext(TodoContext);

    return (
    <>
      <input type="text" placeholder="add a todo....."  value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=>
        {
            const todoItem = {
                id:todoList.length+1,
                text:todo,
                isFinished:false
            };
            setTodoList([...todoList,todoItem]);
            setTodo('');
        }
        }
       >
        Submit
      </button>        
    </>
  )
}
