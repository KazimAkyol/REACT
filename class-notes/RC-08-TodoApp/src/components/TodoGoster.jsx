import React from 'react'

const TodoGoster = ({datam}) => {
    const deleteTodo=(id)=> {
        SetDatam(datam.filter((d)=>d.id !== id))
    }
  return (
    <div>
        {datam.map((d)=>
        <div key={d.id}>
        <p></p>
        </div>
        )}
    </div>
  )
}

export default TodoGoster