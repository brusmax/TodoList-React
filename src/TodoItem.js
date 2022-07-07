import React from "react";
import './TodoItem.css'

function TodoItem(props){
  return(
    <li className="list-group-item TodoItem">
      <p className={`TodoItem-p ${props.completed} && 'TodoITem-p--completed' `}>
        <span className={`Icon Icon-check badge badge-info badge-pill ${props.completed} && 'badge-success'`}> √ </span>
        {props.text}
        <span className="Icon Icon-delete badge badge-danger badge-pill">X</span>
      </p>
      
    </li>
  )
}
export {TodoItem}