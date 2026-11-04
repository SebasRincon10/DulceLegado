
import { useState } from 'react'
import './Galeria.css'

const base = import.meta.env.BASE_URL

const pasteles = [
  {
    nombre: 'Mariposas y Flores',
    precio: 'Desde $5.000 Por Porción',
    imagen: `${base}productos/Pastel-1.jpeg`
  },
  {
    nombre: 'Snoopy y Amigos',
    precio: 'Desde $5.000 Por Porción',
    imagen: `${base}productos/Pastel-2.jpeg`
  },
  {
    nombre: 'Pastel Personalizado',
    precio: 'Desde $5.000 Por Porción',
    imagen: `${base}productos/Pastel-3.jpeg`
  },
  {
    nombre: 'Halloween',
    precio: 'Desde $5.000 Por Porción',
    imagen: `${base}productos/Pastel-4.jpeg`
  },
  {
    nombre: 'Astronautas - Planetas',
    precio: 'Desde $5.000 Por Porción',
    imagen: `${base}productos/Pastel-5.jpeg`
  },
]

const reposteria = [
  {
    nombre: 'Cupcake',
    precio: '$5.000',
    imagen: `${base}productos/reposteria-1.jpg`
  },
  {
    nombre: 'Cheesecake',
    precio: '$8.000',
    imagen: `${base}productos/reposteria-2.jpg`
  },
  {
    nombre: 'Tiramisú',
    precio: '$9.000',
    imagen: `${base}productos/reposteria-3.jpg`
  },
  {
    nombre: 'Brazo de Reina',
    precio: '$35.000',
    imagen: `${base}productos/reposteria-4.jpg`
  },
  {
    nombre: 'Postre de Fresas',
    precio: '$8.000',
    imagen: `${base}productos/reposteria-5.jpg`
  },
]

function CategoriaProductos({ titulo, productos }) {
  const [mostrarTodos, setMostrarTodos] = useState(false)

  const productosVisibles = mostrarTodos
    ? productos
    : productos.slice(0, 4)

  return (
    <section className="categoria-productos">
      <h2 className="categoria-titulo">{titulo}</h2>

      <div className="productos-grid">
        {productosVisibles.map((producto, indice) => (
          <article className="producto-card" key={producto.nombre}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-imagen"
              loading="lazy"
            />

            <div className="producto-info">
              <h3>{producto.nombre}</h3>
              <p>{producto.precio}</p>
            </div>
          </article>
        ))}
      </div>

      {productos.length > 4 && (
        <button
          className="btn-ver-mas"
          onClick={() => setMostrarTodos(!mostrarTodos)}
          type="button"
        >
          {mostrarTodos ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </section>
  )
}

function Galeria() {
  return (
    <section className="galeria-productos" id="productos">
      <div className="galeria-encabezado">
        <h1>Conoce Nuestros Productos</h1>
        <p>Elaborados con amor para endulzar tus momentos especiales.</p>
      </div>

      <CategoriaProductos
        titulo="Pasteles"
        productos={pasteles}
      />

      <CategoriaProductos
        titulo="Repostería"
        productos={reposteria}
      />
    </section>
  )
}

export default Galeria
