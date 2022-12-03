import React from 'react'

const TodoFilter = ({filter, setFilter}) => {
  return (
    <section >

          <div className="bg-white sm:p-4 md:p-0 padinfilter rounded-md flex justify-center gap-4 dark:bg-gray-800">
              <button onClick={() => setFilter("all")} className={`${filter === "all" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-gray-900 dark:hover:text-white" }`}>All</button>
              <button onClick={() => setFilter("active")} className={`${filter === "active" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-gray-900 dark:hover:text-white" }`}>Active</button>
              <button onClick={() => setFilter("completed")} className={`${filter === "completed" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-gray-900 dark:hover:text-white" }`}>Completed</button>
          </div>
          
    </section>
  )
}

export default TodoFilter