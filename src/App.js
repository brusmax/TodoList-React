import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import './App.css'

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Hacer la tarea de mate', completed: false },
  { text: 'Ir a correr', completed: false },
  
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch /> 

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      <button className="CreateTodoButton">+</button>
    </React.Fragment>
  );
}

export default App
