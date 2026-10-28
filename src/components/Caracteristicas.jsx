import './Caracteristicas.css'
import { Cake, Truck, MessageCircle } from 'lucide-react'


function IconoPastel() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Piso superior */}
      <path d="M15 20h18v8H15z" />
      <path d="M15 23c3 3 5-3 8 0s5 3 10 0" />

      {/* Piso inferior */}
      <path d="M8 30h32v10H8z" />
      <path d="M8 33c4 3 6-3 10 0s6 3 10 0 6 3 12 0" />

      {/* Plato */}
      <path d="M5 42h38" />

      {/* Decoración superior */}
      <path d="M24 20v-5" />
      <path d="M24 15c-5-4-6 2 0 3 6-1 5-7 0-3" />
    </svg>
  )
}

function Caracteristicas() {
  return (
    <section className="caracteristicas">
      <div className="caracteristica">
        <div className="caracteristica-icono">
          <Truck size={40} />
        </div>
        <div>
          <h3>Envíos a domicilio</h3>
          <p>Llevamos la dulzura hasta tu puerta.</p>
        </div>
      </div>

      <div className="caracteristica">
        <div className="caracteristica-icono">
          <IconoPastel />
        </div>
        <div>
          <h3>Diseños personalizados</h3>
          <p>Creamos pasteles únicos para tus momentos especiales.</p>
        </div>
      </div>

      <div className="caracteristica">
        <div className="caracteristica-icono">
          <MessageCircle size={40} />
        </div>
        <div>
          <h3>Atención oportuna</h3>
          <p>Respondemos tus consultas para ayudarte con tu pedido.</p>
        </div>
      </div>
    </section>
  )
}

export default Caracteristicas
