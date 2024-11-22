import React, { useState } from 'react'
import moment from "moment"

const Clock = () => {

    const [zaman, setZaman] = useState(moment())

  return (
    <div>
        {zaman.format("HH:mm:ss")}
    </div>
  )
}

export default Clock