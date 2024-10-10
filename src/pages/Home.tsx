import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import ReactPaginate from 'react-paginate'

interface Ordenanza {
  id: number;
  numero: string;
  titulo: string;
  fecha: string;
  contenido: string;
}

const ITEMS_PER_PAGE = 10;

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [ordenanzas, setOrdenanzas] = useState<Ordenanza[]>([])
  const [searchResults, setSearchResults] = useState<Ordenanza[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    // Simular la carga de ordenanzas desde una API
    const mockOrdenanzas = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      numero: `00${i + 1}/2023`,
      titulo: `Ordenanza de Ejemplo ${i + 1}`,
      fecha: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      contenido: `Contenido de ejemplo para la ordenanza ${i + 1}.`
    }));
    setOrdenanzas(mockOrdenanzas)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filteredResults = ordenanzas.filter(ordenanza =>
      ordenanza.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ordenanza.contenido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ordenanza.numero.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(filteredResults)
    setCurrentPage(0)
  }

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
  }

  const paginatedItems = (searchTerm ? searchResults : ordenanzas).slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  )

  const pageCount = Math.ceil((searchTerm ? searchResults.length : ordenanzas.length) / ITEMS_PER_PAGE)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Buscador de Ordenanzas Municipales</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar ordenanzas..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Search size={24} />
          </button>
        </div>
      </form>

      {paginatedItems.length > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {searchTerm ? 'Resultados de la búsqueda' : 'Todas las Ordenanzas'}
          </h2>
          <ul className="space-y-4 mb-8">
            {paginatedItems.map((ordenanza) => (
              <li key={ordenanza.id} className="bg-white p-4 rounded-md shadow">
                <Link to={`/ordenanza/${ordenanza.id}`} className="text-blue-600 hover:underline">
                  <h3 className="text-xl font-semibold">{ordenanza.titulo}</h3>
                </Link>
                <p className="text-gray-600">Nº de Ordenanza: {ordenanza.numero}</p>
                <p className="text-gray-600">Fecha: {ordenanza.fecha}</p>
                <p className="text-gray-700 mt-2">{ordenanza.contenido.substring(0, 100)}...</p>
              </li>
            ))}
          </ul>
          <ReactPaginate
            previousLabel={'Anterior'}
            nextLabel={'Siguiente'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'flex justify-center space-x-2'}
            pageClassName={'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium'}
            pageLinkClassName={''}
            previousClassName={'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-l-md'}
            previousLinkClassName={''}
            nextClassName={'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-r-md'}
            nextLinkClassName={''}
            breakClassName={'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium'}
            breakLinkClassName={''}
            activeClassName={'bg-blue-50 border-blue-500 text-blue-600'}
          />
        </div>
      ) : searchTerm && (
        <p className="text-gray-600">No se encontraron resultados para "{searchTerm}"</p>
      )}
    </div>
  )
}

export default Home