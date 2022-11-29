import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return (
    <div className="bg-white rounded-t-md mt-8">
         
         {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}

          
         
                         
    </div>
  )
}

export default TodoList