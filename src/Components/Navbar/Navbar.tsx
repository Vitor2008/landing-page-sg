import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-scroll';

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
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' loading='lazy' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Serviços</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Sobre</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Contato</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Solicitar Orçamento</Link></li>
      </ul>
      <div className='menu-icon' onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  )
}

export default Navbar