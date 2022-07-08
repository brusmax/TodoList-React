import React from 'react'
import { AppUI } from './AppUI'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Hacer la tarea de mate', completed: false },
  { text: 'Ir a correr', completed: true },
]

function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState(initialValue)
  React.useEffect(()=>{
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItems 

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = initialValue
        }else{
          parsedItems = JSON.parse(localStorageItem)
        }

        setItem(parsedItems)
        setLoading(false)
      }catch(e){
        console.error(e)
        setError(e)
      }

    }, 1000)
  })

  

  const saveItem = (newItem) => {
    try{
      let stringItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringItem)
      setItem(newItem)
    }catch(e){
      setError(e)
    }
    
  }
  return {
    item,
    saveItem,
    loading,
    error,
  }
}


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter( todo => !!todo.completed ).length
  const totalTodos = todos.length

  let searchedTodos = []

  if(!searchValue.length >= 1){
    searchedTodos = todos
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos);
    //const [todos, newTodos] = useLocalStorage('TODOS_V1', [])
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  }

  const newTask = () =>{
    let task = prompt("Agrega tu tarea:")
    const newTodos = [...todos]
    newTodos.push({text: task, completed: false})
    saveTodos(newTodos);
  }

  return (
    <AppUI
    loading={loading}
    error={error}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    newTask={newTask}
    />
  );
}

export default App
