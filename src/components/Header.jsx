import { useEffect, useState } from "react";
import MoonIcon from './icons/MoonIcon'
import IconSon from './icons/IconSon'

const initialDarkMode = document.documentElement.className.includes("dark");

const Header = () => {


  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add("dark");// pone la clase dark en caso de que sea verdadero y lo guarda en localStorage
        localStorage.theme = "dark";
    } else {
        document.documentElement.classList.remove("dark");//quita la clase dark igual que en darkMode.js en utils y lo coloca en localStorage
        localStorage.theme = "light";
    }
  }, [darkMode]); // los [darkMode] es un props que se ejecuta cuando la variable de darkmode cambie, gracias al useEffect

  return (
    <header className="container mx-auto pt-8 px-4 ">

        <div className="flex justify-between">
        <h1 className="text-3xl font-bold tracking-[0.4em] uppercase text-white">Todo</h1>
        {/*<button> <MoonIcon className="fill-red-400" />  </button>*/}
        <button onClick={() => setDarkMode(!darkMode) } > 
          {
            darkMode ? <IconSon /> :  <MoonIcon />
          }  
        </button>
        </div>
     
  </header>
  )
}

export default Header