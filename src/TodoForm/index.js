import React from "react"
import { TodoContext } from "../TodoContext";

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  return (
    <div className="contanier">
      <h2>Agrega una nueva tarea</h2>
      <form onSubmit={onSubmit}>
        <label>...</label>
        <textarea 
          placeholder="Agrega tarea nueva" 
          value={newTodoValue}
          onChange={onChange}
        />
        <div>
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn btn-info"
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  )
}

export { TodoForm }