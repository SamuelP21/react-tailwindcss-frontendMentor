import React from 'react'
import TodoFilter from './TodoFilter'

const TodoComputed = ({computedItemsLeft, removeCompleted, filter, setFilter}) => {
  return (
    <section className="dark:bg-gray-800 py-4 px-4 flex justify-between bg-white rounded-b-md ">
        <span className="text-gray-400 w-[150px]">{computedItemsLeft} items left</span>
        <div className=' md:block sm:hidden muestra container mx-auto '>
          <TodoFilter setFilter={setFilter} filter={filter}  />
        </div>
        <button onClick={() => removeCompleted()} className="text-gray-400 w-[200px]">Clear  Completed</button>
    </section>
  )
}

export default TodoComputed