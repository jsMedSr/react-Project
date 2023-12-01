import React from 'react'
import style from "./Card.module.css"
import CardContent from '../CardContent/CardContent'


export default function Card({namesList,deleteFunc}) {
    const cards = namesList.map((itm) => (
        <CardContent key={itm.id}  itm={itm} deleteFunc={deleteFunc} />

    )

    )


  return (
    <div>
       <div >{cards}</div> 
        
    </div>
  )
}
