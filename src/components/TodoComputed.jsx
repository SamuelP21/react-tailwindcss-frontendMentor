import React from 'react'

const TodoComputed = ({computedItemsLeft, removeCompleted}) => {
  return (
    <section className="dark:bg-gray-800 py-4 px-4 flex justify-between bg-white rounded-b-md ">
        <span className="text-gray-400">{computedItemsLeft} items left</span>
        <button onClick={() => removeCompleted()} className="text-gray-400">Clear  Completed</button>
    </section>
  )
}

export default TodoComputed