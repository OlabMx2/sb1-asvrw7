import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Upload } from 'lucide-react'

const NuevaOrdenanza: React.FC = () => {
  const { user } = useAuth()
  const [numero, setNumero] = useState('')
  const [titulo, setTitulo] = useState('')
  const [fecha, setFecha] = useState('')
  const [contenido, setContenido] = useState('')
  const [documento, setDocumento] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la nueva ordenanza
    console.log('Nueva ordenanza:', { numero, titulo, fecha, contenido, documento })
    // Resetear el formulario
    setNumero('')
    setTitulo('')
    setFecha('')
    setContenido('')
    setDocumento(null)
  }

  if (!user) {
    return <p>Acceso denegado. Por favor, inicie sesión como administrador.</p>
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nueva Ordenanza</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Nº de Ordenanza</label>
          <input
            type="text"
            id="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="contenido" className="block text-sm font-medium text-gray-700">Contenido</label>
          <textarea
            id="contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            required
            rows={10}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <label htmlFor="documento" className="block text-sm font-medium text-gray-700">Documento Escaneado</label>
          <input
            type="file"
            id="documento"
            onChange={(e) => setDocumento(e.target.files ? e.target.files[0] : null)}
            accept=".pdf,.doc,.docx"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Upload size={20} className="mr-2" />
          Guardar Ordenanza
        </button>
      </form>
    </div>
  )
}

export default NuevaOrdenanza