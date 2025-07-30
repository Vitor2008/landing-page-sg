import './About.css'
import img_banner from '../../assets/images/banner-about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';



const About = () => {
    return (
    <div className='site-container about'>
        <div className='about-container'>

            <div className='about-image'>
                <img src={img_banner} alt="Profissional de segurança do trabalho" className='w-100 h-auto rounded-lg shadow-lg' loading='lazy'/>
            </div>

            <div className="about-content">
                <h2 className='text-3xl lg:text-4xl font-bold mb-4'>Por que contratar um Técnico de Segurança do Trabalho?</h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-4'>
                    A segurança do trabalho não é apenas uma obrigação legal, mas um investimento
                    a proteção dos seus colaboradores e na sustentabilidade do seu negócio.
                </p>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-4'>
                    Um técnico especializado garante que sua empresa esteja em conformidade com 
                    todas as normas regulamentadoras, reduzindo riscos de acidentes, multas e processos trabalhistas. 
                    Além disso, promove um ambiente de trabalho mais seguro e produtivo.
                </p>
                <ul>
                    <li className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faCircleCheck } className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Redução de acidentes de trabalho</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faCircleCheck } className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Conformidade com normas regulamentadoras</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faCircleCheck } className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Economia com multas e processos</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faCircleCheck } className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Melhoria da produtividade</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    )
}

export default About