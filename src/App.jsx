import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Navbar />

      <main className="main">
        <Home />
      </main>

      <Footer />
    </>
  )
}

export default App
