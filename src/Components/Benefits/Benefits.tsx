import './Benefits.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShield,
    faUsers,
    faHelmetSafety
} from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck  } from '@fortawesome/free-regular-svg-icons';

const Benefits = () => {
    return (
        <div className='benefits'>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className="text-center space-y-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <FontAwesomeIcon icon={faShield} className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Proteção Legal</h3>
                    <p className="text-gray-600">Mantenha sua empresa protegida contra multas e processos trabalhistas</p>
                </div>

                <div className="text-center space-y-4">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Bem-estar dos Funcionários</h3>
                    <p className="text-gray-600">Colaboradores mais seguros e motivados trabalham com maior produtividade</p>
                </div>

                <div className="text-center space-y-4">
                    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <FontAwesomeIcon icon={faCircleCheck} className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Redução de Custos</h3>
                    <p className="text-gray-600">Diminua gastos com afastamentos, indenizações e seguros</p>
                </div>

                <div className="text-center space-y-4">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <FontAwesomeIcon icon={faHelmetSafety} className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Imagem Corporativa</h3>
                    <p className="text-gray-600">Fortaleça a reputação da sua empresa como empregadora responsável</p>
                </div>
            </div>
            
        </div>
    )
}

export default Benefits