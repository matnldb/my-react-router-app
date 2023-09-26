import React from 'react'
import { useParams } from 'react-router-dom'

export const TacoDetails = () => {
    const {taco} = useParams();
  return (
    <div>
        <h1>TacoDetails</h1>
        <hr/>
        <h2>{taco}</h2>
    </div>
  )
}
