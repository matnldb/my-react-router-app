import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { SearchPage } from './SearchPage'
import { Tacos } from './Tacos'
import { TacoDetails } from './TacoDetails'
import { NotFound } from './NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/tacos/:taco" element={<Tacos />}>
        <Route path="details" element={<TacoDetails />}/>
      </Route> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

//Notas
// en la sentencia /:taco, es un parámetro dinámico que variará segun el link al que se apunte en 
// el componente Tacos
// en details no se pondra /details sino asi porque sera una ruta relativa q preserva la jerarquia anterior