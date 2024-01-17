import { useState } from "react"

export default function Todo({text,isFinished,onDeleteTodo,onEditTodo,onIsFinished}) {
    const [isEdit,setIsEdit] = useState(false);
    const [todoText,settodoText] = useState(text);
  return (
    <div>
        <input type="checkbox" checked={isFinished} onChange={()=>onIsFinished(!isFinished)} />
        {isEdit ? <input onChange={(e)=>settodoText(e.target.value)} value={todoText}/> :<span>{todoText}</span>} 
        <button onClick={()=>{
            setIsEdit(!isEdit);
            onEditTodo(todoText);
        }}>{isEdit?'Save':'Edit'}</button>
        <button onClick={onDeleteTodo}>Delete</button>
    </div>
  )
}
