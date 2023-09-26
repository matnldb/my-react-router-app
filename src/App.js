import React from 'react'
import { Navbar } from './components/NavBar'
import { AppRoutes } from './components/AppRoutes'

// Componente principal App
export const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  )
}
