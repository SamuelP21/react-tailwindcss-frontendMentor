import {Droppable, Draggable } from "@hello-pangea/dnd";

import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, updateTodo, removeTodo}) => {
  return (
    <Droppable droppableId="todos">

      { // la referencia lo tiene el componente anidado el Ref
        (droppableProvided ) =>(
          <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className="bg-white rounded-t-md mt-8 overflow-hidden dark:bg-gray-800">
         
              {todos.map((todo, index) => ( // el index es para ordenarlo cuando se mueva
                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                  {
                    (draggableProvided) => (
                          <TodoItem
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.dragHandleProps}
                              {...draggableProvided.draggableProps}
                              todo={todo}
                              removeTodo={removeTodo}
                              updateTodo={updateTodo}
                               />              
                      )
                  }
                    
                </Draggable>
              ))}  

            {droppableProvided.placeholder} 

          </div>
        )
      }
   
    </Droppable>
  )
}

export default TodoList