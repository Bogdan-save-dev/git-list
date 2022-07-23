import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { FavouritesPage } from './pages/FavouritesPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  )
}

export default App
