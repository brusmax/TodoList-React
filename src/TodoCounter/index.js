import React from 'react'
import './TodoCounter.css'

function TodoCounter(params){
  return(
    <h2 className="TodoCounter">Has completado {params.completed} de {params.total} TODOs </h2>
  )
}

export {TodoCounter}