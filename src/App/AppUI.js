import React from "react"
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import './App.css'
import { PromiseProvider } from "mongoose"

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  newTask
}){
  return(
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
       /> 

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

      <CreateTodoButton onClick={() => newTask()} />
    </React.Fragment> 
  )
}

export { AppUI }

