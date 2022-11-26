import React from 'react'

const TodoComputed = () => {
  return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md ">
        <span className="text-gray-400">5 items left</span>
        <button className="text-gray-400">Clear  Completed</button>
    </section>
  )
}

export default TodoComputed