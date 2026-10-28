
import { useState, useEffect } from 'react'
import halloweenBanner from '../assets/halloween-banner.png'
import pastelesBanner from '../assets/banner-2.png'
import reposteriaBanner from '../assets/banner-3.png'
import './Hero.css'

const banners = [
  {
    imagen: halloweenBanner,
    alt: 'Banner especial de Halloween',
  },
  {
    imagen: pastelesBanner,
    alt: 'Pasteles para cumpleaños, bodas, bautizos y primeras comuniones',
  },
  {
    imagen: reposteriaBanner,
    alt: 'Repostería artesanal: tiramisú, cupcakes, cheesecake y brazo de reina',
  },
]

function Hero() {
  const [bannerActual, setBannerActual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setBannerActual((actual) => (actual + 1) % banners.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section className="hero-banner" id="inicio">
      <img
        key={bannerActual}
        src={banners[bannerActual].imagen}
        alt={banners[bannerActual].alt}
        className="hero-banner-image"
      />

      <div className="hero-indicadores">
        {banners.map((banner, indice) => (
          <button
            key={banner.alt}
            type="button"
            className={`hero-indicador ${
              bannerActual === indice ? 'activo' : ''
            }`}
            onClick={() => setBannerActual(indice)}
            aria-label={`Mostrar banner ${indice + 1}`}
            aria-current={bannerActual === indice ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
