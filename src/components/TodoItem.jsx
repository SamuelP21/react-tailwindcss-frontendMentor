import React from 'react'
import CheckIcon from './icons/CheckIcon'
import CrossIcon from './icons/CrossIcon'
                                                                  /// el ...props se llama rest operation el resto de las operaciones que le mandemos
const TodoItem = React.forwardRef(({todo, updateTodo, removeTodo,...props}, ref) => { // el react.forwardRef es para recibir la referencia que estamos enviando u lo recibimos 

  const {id, title, completed} = todo;

  return (
    <article {...props} ref={ref} className="flex gap-4 py-4 border-b-gray-400 border-b px-4 dark:bg-gray-800">
             
                <button onClick={() => updateTodo(id)} className={`rounded-full border-2 w-5 h-5 flex-none ${completed 
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" 
                  : "inline-block"}`}>
                  {
                    completed && <CheckIcon /> //si la tarea esta completed devuelve el icono
                  }
                  
                </button>
                <p className={`grow  ${completed ? "text-gray-300 line-through dark:text-gray-700"
                  : "text-gray-600 dark:text-gray-400"}`}>{title}</p>
                <button onClick={() => removeTodo(id)} className="flex-none"><CrossIcon /> </button>
    </article>
  )
})

export default TodoItem