import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHelmetSafety,   
  faUsers,          
  faClipboardCheck,
  faFile,           
  faBookOpen,       
  faStethoscope 
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='services grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      
       <div className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600 w-100">
        <div className='p-6'>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faHelmetSafety} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl">Treinamento NR-10</h2>
          </div>
        </div>
        <div className='p-6'>
          <p className="text-gray-600">
            Treinamento completo sobre segurança em instalações e serviços em eletricidade, conforme norma
            regulamentadora NR-10. Capacitação teórica e prática para prevenção de acidentes elétricos.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Services
