
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

function App() {
  

  return (
    <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      {/* Header */}
     <Header />
      <main className="container mx-auto px-4 mt-8">

          {/*TodoCreate */}
          <TodoCreate />

        {/*TodoList (TodoItem) TodoUpdate TodoDelete */}
        <TodoList />
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
