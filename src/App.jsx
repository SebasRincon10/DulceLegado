import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar'
import './App.css'
import Hero from './components/Hero'
import Caracteristicas from './components/Caracteristicas'

function App() {
  const productos = [
  {
    id:1,
    nombre: 'Pastel de Chocolate',
    precio: 50000
  },
  {
    id:2,
    nombre: 'Pastel de Vainilla',
    precio: 45000
  },
  {
    id:3,
    nombre: 'Pastel Red Velvet',
    precio: 65000
  }
]
  return (
    <div>
      <NavBar />
      <Hero />
      <Caracteristicas />
      <h1>Dulce Legado</h1>
      <p>Pasteles de Cumpleaños</p>
      {productos.map((producto)=>(
        <ProductCard
        key={producto.id}
        nombre={producto.nombre}
        precio={producto.precio}
        />
      ))}
    </div>
  )
  }

  export default App