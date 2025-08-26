import { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/images/logo-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        setSticky(window.scrollY > 50);
      })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`site-container ${sticky ? 'dark-nav' : ''}`}>
      <div className='container-logo'>
        <div className='logo-header'>
          <img src={logo} alt="Logo" className='logo' loading='lazy' />
          <span>INOVASEG</span>
        </div>
        <h2>Consultoria em Segurança do Trabalho</h2>
      </div>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-360} duration={500}>Serviços</Link></li>
        <li><Link to='about' smooth={true} offset={-160} duration={500}>Sobre</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contato</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>
        <button className='btn'>
          Solicitar Orçamento
        </button></Link></li>
      </ul>
      <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar