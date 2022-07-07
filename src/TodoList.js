import React, { Children } from "react";
import './TodoList.css'

function TodoList(props){
  return(
    <section>
      <ul className="list-group">
        {props.children}
      </ul>
    </section>
  )
}

export { TodoList }