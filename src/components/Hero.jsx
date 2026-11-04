
import { useState, useEffect } from 'react'

import bannerPrincipal from '../assets/banner-1.png'
import bannerPrincipalMobile from '../assets/banner-1-mobile.png'

import pastelesBanner from '../assets/banner-2.png'
import pastelesBannerMobile from '../assets/banner-2-mobile.png'
import reposteriaBanner from '../assets/banner-3.png'
import reposteriaBannerMobile from '../assets/banner-3-mobile.png'

import './Hero.css'

const banners = [
  {
    imagen: bannerPrincipal,
    imagenMobile: bannerPrincipalMobile,
    alt: 'Banner especial de Navidad'
  },
  {
    imagen: pastelesBanner,
    imagenMobile: pastelesBannerMobile,
    alt: 'Pasteles personalizados'
  },
  {
    imagen: reposteriaBanner,
    imagenMobile: reposteriaBannerMobile,
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
  }, [bannerActual, bannerAnterior])

  const cambiarBanner = (indice) => {
    if (indice !== bannerActual) {
      setBannerAnterior(bannerActual)
      setBannerActual(indice)
    }
  }

  return (
    <section className="hero-banner" id="inicio">

      {bannerAnterior !== null && (
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={banners[bannerAnterior].imagenMobile}
          />
          <img
            src={banners[bannerAnterior].imagen}
            alt=""
            className="hero-banner-image banner-saliendo"
          />
        </picture>
      )}

      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={banners[bannerActual].imagenMobile}
        />
        <img
          src={banners[bannerActual].imagen}
          alt={banners[bannerActual].alt}
          className="hero-banner-image banner-entrando"
        />
      </picture>

      <div className="hero-indicadores">
        {banners.map((banner, indice) => (
          <button
            key={banner.alt}
            type="button"
            className={`hero-indicador ${
              bannerActual === indice ? 'activo' : ''
            }`}
            onClick={() => cambiarBanner(indice)}
            aria-label={`Mostrar banner ${indice + 1}`}
            aria-current={bannerActual === indice ? 'true' : undefined}
          />
        ))}
      </div>

    </section>
  )
}

export default Hero
