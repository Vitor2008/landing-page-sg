import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Benefits from './Components/Benefits/Benefits'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
        <Navbar/>
        <Home/>
        <div className='site-container'>
          <Title 
          subTitle='Soluções completas em segurança ocupacional para manter 
          sua empresa protegida e em conformidade com as normas regulamentadoras' 
          title='Serviços de Segurança do Trabalho'/>
          <Services/>
        </div>
        <About/>
        <div className='site-container'>
          <Title subTitle='Investir em consultoria especializada traz 
          retornos significativos para sua empresa e colaboradores'
          title='Benefícios de ter uma Consultoria 
          em Segurança do Trabalho' />
          <Benefits/>
          <Title subTitle='Solicite um orçamento personalizado para sua empresa' 
          title='Entre em Contato' />
          <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
