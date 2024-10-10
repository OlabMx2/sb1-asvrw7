import React from 'react'
import { useParams } from 'react-router-dom'
import { FileText, Download } from 'lucide-react'

const OrdenanzaDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // Aquí iría la lógica para obtener los detalles de la ordenanza
  // Por ahora, usaremos datos de ejemplo
  const ordenanza = {
    id,
    numero: '001/2023',
    titulo: 'Ordenanza de Tránsito',
    fecha: '2023-01-15',
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.',
    documentoUrl: '#'
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{ordenanza.titulo}</h1>
      <p className="text-gray-600 mb-2">Nº de Ordenanza: {ordenanza.numero}</p>
      <p className="text-gray-600 mb-4">Fecha: {ordenanza.fecha}</p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contenido</h2>
        <p className="text-gray-800 whitespace-pre-wrap">{ordenanza.contenido}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Documento Adjunto</h2>
        <a
          href={ordenanza.documentoUrl}
          download
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <FileText size={20} className="mr-2" />
          <span>Descargar Documento</span>
        </a>
      </div>
    </div>
  )
}

export default OrdenanzaDetalle