import { useState,useContext} from "react"
import {TodoContext} from "../../context/TodoContext";

export default function AddTodo() {
    const [todo,setTodo] = useState('');
    const {dispatch} = useContext(TodoContext);

    return (
    <>
      <input type="text" placeholder="add a todo....."  value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=>
        {
            dispatch({type:'add_todo',payload:{todo}});
            setTodo('');
        }
        }
       >
        Submit
      </button>        
    </>
  )
}
