import React from 'react'

const HastaListe = ({eklenecek, setEklenecek}) => {
  return (
    <div>
    {eklenecek.map((a) =>(
        <div>
            {a.text}
            {a.day}
            {a.bittiMi}
            {a.doktor}
        </div>
    ))}
    </div>
  )
}

export default HastaListe