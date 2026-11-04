
import { useState, useEffect } from 'react'

import halloweenBanner from '../assets/halloween-banner.png'
import pastelesBanner from '../assets/banner-2.png'
import reposteriaBanner from '../assets/banner-3.png'

import './Hero.css'

const banners = [
  {
    imagen: halloweenBanner,
    alt: 'Banner especial de Halloween'
  },
  {
    imagen: pastelesBanner,
    alt: 'Pasteles personalizados'
  },
  {
    imagen: reposteriaBanner,
    alt: 'Repostería artesanal'
  }
]

function Hero() {
  const [bannerActual, setBannerActual] = useState(0)
  const [bannerAnterior, setBannerAnterior] = useState(null)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setBannerActual((actual) => {
        setBannerAnterior(actual)
        return (actual + 1) % banners.length
      })
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])

  useEffect(() => {
    if (bannerAnterior === null) return

    const tiempo = setTimeout(() => {
      setBannerAnterior(null)
    }, 2000)

    return () => clearTimeout(tiempo)
  }, [bannerActual])

  return (
    <section className="hero-banner" id="inicio">

      {bannerAnterior !== null && (
        <img
          src={banners[bannerAnterior].imagen}
          alt=""
          className="hero-banner-image banner-saliendo"
        />
      )}

      <img
        src={banners[bannerActual].imagen}
        alt={banners[bannerActual].alt}
        className="hero-banner-image banner-entrando"
      />

      <div className="hero-indicadores">
        {banners.map((banner, indice) => (
          <button
            key={banner.alt}
            type="button"
            className={`hero-indicador ${
              bannerActual === indice ? 'activo' : ''
            }`}
            onClick={() => {
              if (indice !== bannerActual) {
                setBannerAnterior(bannerActual)
                setBannerActual(indice)
              }
            }}
            aria-label={`Mostrar banner ${indice + 1}`}
            aria-current={bannerActual === indice ? 'true' : undefined}
          />
        ))}
      </div>

    </section>
  )
}

export default Hero
