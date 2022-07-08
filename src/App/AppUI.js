import React from "react"
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { TodoError } from "../TodoError/index.js"
import { TodosLoading } from "../TodosLoading"
import { EmptyTodos } from "../EmptyTodos"
import { PromiseProvider } from "mongoose"
import './App.css'

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
    openModal,
    setOpenModal,

  } = React.useContext(TodoContext);
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch /> 

      
      <TodoList>
        {error && <TodoError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos) && <EmptyTodos />}

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

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal} 
      />
    </React.Fragment> 
  )
}

export { AppUI }

