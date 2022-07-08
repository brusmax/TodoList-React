import React from "react";
import { BsPlusCircleFill } from 'react-icons/bs';
import './CreateTodoButton.css'

function CreateTodoButton(props){
  const onClickButton = () => {
    props.setOpenModal( prevState => !prevState)
  }
  return(
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <BsPlusCircleFill />
    </button>
  )
}

export { CreateTodoButton }