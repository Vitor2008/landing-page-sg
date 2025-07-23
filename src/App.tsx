import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'

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
    </div>
  )
}

export default App
