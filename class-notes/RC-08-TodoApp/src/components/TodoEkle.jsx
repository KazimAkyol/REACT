import React, { useState } from 'react'

const TodoEkle = ({datam,setDatam}) => {
    const [yapilacakIs, setYapilacakIs] = useState("")
    const handleSubmit = (e) => {
        e,preventDefault();

        setDatam([...datam, {
            id: datam.length,
            text: yapilacakIs,
            day: new Date().getDate(),
            isDone: false
        }])
    }
  return (
    <div>

    </div>
  )
}

export default TodoEkle