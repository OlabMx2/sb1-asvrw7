import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import OrdenanzaDetalle from './pages/OrdenanzaDetalle'
import NuevaOrdenanza from './pages/NuevaOrdenanza'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ordenanza/:id" element={<OrdenanzaDetalle />} />
              <Route path="/nueva-ordenanza" element={<NuevaOrdenanza />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App