import './utils/darkMode' // configurar si el usuario tiene la configuracion en modo oscuro y poder modificarlo 

import deskL from './assets/images/bg-desktop-light.jpg'

import { useEffect, useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

/*const initialStateTodos = [
  { id: 1, title: "Complete online JavaScript course", completed: true,},
  { id: 2, title: "Jog around the park 3x", completed: false,},
  { id: 3, title: "10 minutes meditation", completed: false,},
  { id: 4, title: "Read for 1 hours", completed: false,},
  { id: 5, title: "Pick up groceries", completed: false,},
  { id: 6, title: "Complete Todo App n Frontend Mentor", completed: false,},
]*/

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [] // vemos si tienen guardado en localStorage todos los obtengo y lo traducimos  del formato json sino tiene nada un array de basio

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

const removeCompleted = () => {
  setTodos(todos.filter((todo) => !todo.completed));
}

const [filter, setFilter] = useState("all");

const filterTodo = () => {
  switch(filter){
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}

useEffect(() => { // estaremos pendiente de los todos para actualizar el localStorage

  localStorage.setItem("todos", JSON.stringify(todos)); // convertimos los todos  a json string

}, [todos]);

const computedItemsLeft = todos.filter((todo) => !todo.completed).length

  return (
    <div className="transition-all duration-1000  md:bg-[url('./assets/images/bg-desktop-light.jpg')]  bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      {/* Header */}
     <Header />
      <main className="container mx-auto px-4 mt-8 md:max-w-xl">

          {/*TodoCreate */}
          <TodoCreate createTodo={createTodo} />

        {/*TodoList (TodoItem) TodoUpdate TodoDelete */}
        <TodoList todos={filterTodo()} updateTodo={updateTodo} removeTodo={removeTodo}/>
        {/* TodoComputed */}
       <TodoComputed computedItemsLeft={computedItemsLeft} removeCompleted={removeCompleted} setFilter={setFilter} filter={filter} />

        {/*TodoFilter */}
        <div className="md:hidden container mx-auto  mt-8 "><TodoFilter setFilter={setFilter} filter={filter} /></div>
        
      </main>

      


      

      <footer className="text-center mt-8 dark:text-gray-400 ">Drag and drop to reader list</footer>
    </div>
  )
}

export default App
