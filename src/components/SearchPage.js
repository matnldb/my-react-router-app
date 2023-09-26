import React from 'react'
import { Link } from 'react-router-dom';

export const SearchPage = () => {

  const tacos =['cabeza', 'pastor', 'asada', 'dorado'];
  return (
    <div>
      <h1>SearchPage</h1>
      <hr/>
      <ul>
      {
        tacos.map(taco =>(
          <li key={taco}>
            <Link to = {`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}
