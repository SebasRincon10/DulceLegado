
import logo from '../assets/logo-dulce-legado.png'
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaLocationDot
} from 'react-icons/fa6'

import './Footer.css'

function Footer() {
  return (
    <footer className="footer-dulce">

      <div className="footer-superior">

        <div className="footer-logo">
          <img
            src={logo}
            alt="Logo de la pastelería"
          />
        </div>

        <div className="footer-redes">
          <a href="https://www.instagram.com/"
             target="_blank" rel="noreferrer"
             aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/"
             target="_blank" rel="noreferrer"
             aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="https://www.tiktok.com/"
             target="_blank" rel="noreferrer"
             aria-label="TikTok">
            <FaTiktok />
          </a>

          <a href="https://wa.me/573000000000"
             target="_blank" rel="noreferrer"
             aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <div className="footer-linea"></div>

      <div className="footer-inferior">
        <p>
          © 2026 Dulce Legado. Todos los derechos reservados.
        </p>

        <p>
          <FaLocationDot /> Bogotá, Colombia
        </p>

        <p>
          <FaWhatsapp /> +57 304 621 59 62
        </p>
      </div>

    </footer>
  )
}

export default Footer
