import React from "react"

function TodosLoading(){
  return (
    <div className="container justify-content-center:">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export { TodosLoading }