import logo from '../assets/logo-dulce-legado.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg dulce-navbar">
      <div className="container">

        <a className="navbar-brand dulce-logo" href="#">
          <img
            src={logo}
            alt="Dulce Legado"
            className="dulce-logo-img"
          />
          
        </a>
        <button 
        className="navbar-toggler dulce-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#dulceMenu"
        aria-controls="dulceMenu"
        aria-expanded="false"
        aria-label="Abrir Menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div 
        className="collapse navbar-collapse dulce-menu"
        id="dulceMenu">
        <div className="dulce-links">
          <a className="nav-link dulce-link activo" href="#">
            Inicio
            <span className="dulce-link-cake">🧁</span>
          </a>

          <a className="nav-link dulce-link" href="#">
            Pasteles
            <span className="dulce-link-cake">🧁</span>
          </a>
          <a className="nav-link dulce-link" href="#">
            Reposteria
            <span className="dulce-link-cake">🧁</span>
          </a>
          <a className="nav-link dulce-link" href="#">
            Nosotros
            <span className="dulce-link-cake">🧁</span>
          </a>
        </div>
        </div>

        <button className="btn dulce-cart">
          🛒 Carrito
        </button>

      </div>
      
    </nav>
  )
}

export default Navbar