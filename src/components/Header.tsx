import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { BookOpen, LogIn, LogOut } from 'lucide-react'

const Header: React.FC = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen size={24} />
          <span className="text-xl font-bold">Ordenanzas Municipales</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Inicio</Link>
            </li>
            {user && (
              <li>
                <Link to="/nueva-ordenanza" className="hover:underline">Nueva Ordenanza</Link>
              </li>
            )}
            {user ? (
              <li>
                <button onClick={logout} className="flex items-center space-x-1 hover:underline">
                  <LogOut size={18} />
                  <span>Cerrar Sesión</span>
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="flex items-center space-x-1 hover:underline">
                  <LogIn size={18} />
                  <span>Iniciar Sesión</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header