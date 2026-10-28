function ProductCard({ nombre, precio }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p className="card-text">${precio}</p>
        <button className="btn btn-primary">
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard