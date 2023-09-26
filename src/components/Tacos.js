import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

export const Tacos = () => {

const {taco}  = useParams(); //se obtienen los parámetros de una URL dinámica

  return (
    <div>
        <h1>Tacos</h1>
        <hr/>
        {taco}
        <Link to ='details'>Ir a los detalles</Link>
        <Outlet/>
    </div>
  )
}

/*
An <Outlet> should be used in parent route elements to render their child route elements. 
This allows nested UI to show up when child routes are rendered. 
If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
*/