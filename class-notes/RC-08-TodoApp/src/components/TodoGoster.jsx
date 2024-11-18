import React from 'react'

const TodoGoster = ({datam}) => {
  return (
    <div>
        {datam.map((d)=>
        <div key={d.id}>
        <h1></h1>
        <h2></h2>
        <p></p>
        </div>
        )}
    </div>
  )
}

export default TodoGoster