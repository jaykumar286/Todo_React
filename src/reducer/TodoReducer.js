export default function TodoReducer(state,action){
    if (action.type == 'add_todo'){
        const todoItem = {
            id:state.length+1,
            text:action.payload.todo,
            isFinished:false
        };
        return [...state,todoItem];
    }
    else if (action.type == 'edit_todo'){
        const newTodo = state.map(todo=>{
            if(todo.id==action.payload.id){
               todo.text = action.payload.text;
            }
            return todo
        });
        return newTodo;
    }
    else if (action.type == 'delete_todo'){
        const newTodo = state.filter((todo)=>todo.id!=action.payload.id);
        return newTodo;
    }
    else if (action.type == 'finish_todo'){
        const newTodo = state.map(todo=>{
            if(todo.id == action.payload.id){
               todo.isFinished = action.payload.state;
            }
            return todo
          });
         return newTodo;
    }
    return state;
};