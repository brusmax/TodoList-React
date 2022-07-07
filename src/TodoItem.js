import React from "react";
import './TodoItem.css'

function TodoItem(props){
  const onClomplete = () => {
    alert('listo con '+ props.text)
  }
  const onDelete = () => {
    alert('deleted: '+ props.text)
  }
  return(
    <li className={`list-group-item TodoItem ${props.completed && 'list-group-item-success'}`}>
        <span 
        className={`Icon Icon-check badge ${!props.completed && 'badge-info'} badge-pill ${props.completed && 'badge-success'}`}
        onClick={onClomplete}
        > √ </span>
        {props.text}
        <span 
          className="Icon Icon-delete badge badge-danger badge-pill"
          onClick={onDelete}
          >X</span>
    </li>
  )
}
export {TodoItem}