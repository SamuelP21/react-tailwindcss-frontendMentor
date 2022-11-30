import { useState } from "react"

const TodoCreate = ({createTodo}) => {


  const [title, setTite] = useState('')

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    console.log(title);

    if (!title.trim()) {          
      return setTite("");
    }

    createTodo(title);
    setTite("");
    
  }
  return (
        <form onSubmit={handleSubmitAddTodo} className="dark:bg-gray-800 bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4  ">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input className=" dark:bg-gray-800 w-full text-gray-400 outline-none" type="text" value={title} onChange={(e) => setTite(e.target.value)} placeholder="Create a new todo..."/>
        </form>
  )
}

export default TodoCreate