import React from 'react'

function TodoList({todos,setTodos,setEditTodo}) {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item)=>{
                if (item.id === todo.id){
                    return {...item,completed: !item.completed};
                }
                return item;
            })
        )
    }
    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo) => todo.id === id );
        setEditTodo(findTodo);
    };
  return (
    <div>
        {todos.map((todo) =>{
            return(
            <li className='list-item' key={todo.id}>
                <input type='text'
                 value={todo.title} 
                 className={`list ${todo.completed ? "complete" : ""}` }
                 onChange={(event) =>event.preventDefault() }
                 />
                <div>
                    <button className='button-complete tast-complete' onClick={()=>handleComplete(todo)}>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit tast-complete' onClick={()=>handleEdit(todo)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete tast-complete' onClick={()=>handleDelete(todo)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>)
        })}
    </div>
  )
}

export default TodoList