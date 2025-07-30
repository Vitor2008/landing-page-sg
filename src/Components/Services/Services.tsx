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
    <div className='services grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
      
      <div className="card">
        <div className='p-4'>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faHelmetSafety} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold">Treinamento NR-10</h2>
          </div>
        </div>
        <div className='p-4'>
          <p className="text-gray-600">
            Treinamento completo sobre segurança em instalações e serviços em eletricidade, conforme norma
            regulamentadora NR-10. Capacitação teórica e prática para prevenção de acidentes elétricos.
          </p>
        </div>
      </div>

      <div className="card">
        <div className='p-4'>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold">Treinamento NR-35</h2>
          </div>
        </div>
        <div className='p-4'>
          <p className="text-gray-600">
            Capacitação para trabalho em altura conforme NR-35, incluindo técnicas de 
            segurança, uso correto de EPIs, procedimentos de emergência e prevenção de quedas.
          </p>
        </div>
      </div>

      <div className="card">
        <div className='p-4'>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faClipboardCheck} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold">Análise de Riscos Ocupacionais</h2>
          </div>
        </div>
        <div className='p-4'>
          <p className="text-gray-600">
            Identificação e avaliação detalhada de riscos ocupacionais no ambiente de trabalho 
            com elaboração de medidas preventivas e corretivas para garantir a segurança dos trabalhadores.
          </p>
        </div>
      </div>

      <div className="card">
        <div className='p-4'>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faFile} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold">Elaboração de PPRA</h2>
          </div>
        </div>
        <div className='p-4'>
          <p className="text-gray-600">
            Programa de Prevenção de Riscos Ambientais personalizado para sua empresa, garantindo
            conformidade legal e proteção dos trabalhadores contra riscos ambientais.
          </p>
        </div>
      </div>

      <div className="card">
        <div className='p-4'>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faBookOpen} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold">Elaboração de PCMSO</h2>
          </div>
        </div>
        <div className='p-4'>
          <p className="text-gray-600">
            Programa de Controle Médico de Saúde Ocupacional com foco na prevenção, 
            rastreamento e diagnóstico precoce de doenças relacionadas ao trabalho.
          </p>
        </div>
      </div>

      <div className="card">
        <div className='p-4'>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FontAwesomeIcon icon={faStethoscope} className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold">Consultoria em Segurança Ocupacional</h2>
          </div>
        </div>
        <div className='p-4'>
          <p className="text-gray-600">
            Consultoria personalizada para implementação de medidas de segurança, adequação
            às normas regulamentadoras e criação de cultura de segurança na empresa.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Services
