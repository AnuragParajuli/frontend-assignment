// src/App.js
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
