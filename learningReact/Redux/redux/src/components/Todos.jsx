import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../feature/todo/todoSclice";

function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return(
        <div>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>
                        x
                    </button>
                </li>
            ))}
        </div>
    )
}
export default Todos;