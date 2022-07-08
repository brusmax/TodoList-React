import React from "react"
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import './App.css'
import { PromiseProvider } from "mongoose"

// const newTask = () =>{
  //   let task = prompt("Agrega tu tarea:")
  //   const newTodos = [...todos]
  //   newTodos.push({text: task, completed: false})
  //   saveTodos(newTodos);
  // }

function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch /> 

      
      <TodoList>
        {error && <p>Huy, hubo un error....</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !searchedTodos) && <p>Crea tu primer TODO.</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => { completeTodo(todo.text)}}
            onDelete={() => { deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>

      <CreateTodoButton  />
    </React.Fragment> 
  )
}

export { AppUI }

