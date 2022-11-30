import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, updateTodo, removeTodo}) => {
  return (
    <div className="bg-white rounded-t-md mt-8">
         
         {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
          ))}

          
         
                         
    </div>
  )
}

export default TodoList