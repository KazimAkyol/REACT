import React from 'react'

const CardGrid = () => {

    fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data)=>console.log(data))

  return (
    <div>

    </div>
  )
}

export default CardGrid