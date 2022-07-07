import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
  // const onClickButton = () => {
  //   alert("Oli")
  // }
  return(
    <button 
      className="CreateTodoButton"
      onClick={props.onClick}
    >+</button>
  )
}

export { CreateTodoButton }