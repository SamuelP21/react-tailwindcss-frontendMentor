
import { useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

const initialStateTodos = [
  { id: 1, title: "Complete online JavaScript course", completed: true,},
  { id: 2, title: "Jog around the park 3x", completed: false,},
  { id: 3, title: "10 minutes meditation", completed: false,},
  { id: 4, title: "Read for 1 hours", completed: false,},
  { id: 5, title: "Pick up groceries", completed: false,},
  { id: 6, title: "Complete Todo App n Frontend Mentor", completed: false,},
]

function App() {
  
const [todos, setTodos] = useState(initialStateTodos)

const createTodo = (title) => {
  const newTodo = {
    id: todos.length + 1,
    title: title.trim(),
    completed: false,
  }
  setTodos([...todos,newTodo]);
}

const removeTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
}

const updateTodo = (id) => {
  setTodos(todos.map(
    (todo) => todo.id === id ? {...todo, completed: !todo.completed } : todo)) // :todo es caso contrario devitele el todo ya que no coinside con el todo
}

  return (
    <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      {/* Header */}
     <Header />
      <main className="container mx-auto px-4 mt-8">

          {/*TodoCreate */}
          <TodoCreate createTodo={createTodo} />

        {/*TodoList (TodoItem) TodoUpdate TodoDelete */}
        <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo}/>
        {/* TodoComputed */}
       <TodoComputed />

        {/*TodoFilter */}
        <TodoFilter />
      </main>

      


      

      <footer className="text-center mt-8">Drag and drop to reader list</footer>
    </div>
  )
}

export default App
