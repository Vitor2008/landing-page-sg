import './Footer.css'
import logo from '../../assets/images/logo-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <div className="footer site-container bg-gray-800 text-white">
        <div className="container-footer">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="" className="text-gray-300">
                  <FontAwesomeIcon className='h-6 w-6 hover:text-blue-400 transition-colors' icon={faFacebook}></FontAwesomeIcon>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="" className="text-gray-300">
                  <FontAwesomeIcon className='h-6 w-6 hover:text-blue-400 transition-colors' icon={faInstagram}></FontAwesomeIcon>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="" className="text-gray-300">
                  <FontAwesomeIcon className='h-6 w-6 hover:text-blue-400 transition-colors' icon={faLinkedin}></FontAwesomeIcon>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon className='h-4 w-4 hover:text-blue-400 transition-colors' icon={faWhatsapp}></FontAwesomeIcon>
                  <span>(65) 9 9256-5297</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon className='h-4 w-4 hover:text-blue-400 transition-colors' icon={faEnvelope}></FontAwesomeIcon>
                  <span>arthuroliveiratst22@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon className='h-4 w-4 hover:text-blue-400 transition-colors' icon={faLocation}></FontAwesomeIcon>
                  <span>Cuiabá, MT</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={logo} alt='logo' width={65} />
                <span className="text-xl font-bold color-primary">INOVASEG</span>
              </div>
              <p className="text-gray-300">
                Consultoria especializada em segurança do trabalho, protegendo empresas e colaboradores.
              </p>
            </div>
            
          </div>

          <div className="footer-copy text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} INOVASEG. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    )
}

export default Footer