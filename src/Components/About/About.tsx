import './About.css'
import img_banner from '../../assets/images/banner-about.png'

const About = () => {
    return (
    <div className='site-container about'>
        <div className='about-container'>
            <div className='about-content'>
                <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
                    Por que contratar um Técnico de Segurança do Trabalho?
                </h2>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-3'>
                    A segurança do trabalho não é apenas uma obrigação legal, mas um investimento
                    a proteção dos seus colaboradores e na sustentabilidade do seu negócio.
                </p>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-3'>
                    Um técnico especializado garante que sua empresa esteja em conformidade com 
                    todas as normas regulamentadoras, reduzindo riscos de acidentes, multas e processos trabalhistas. 
                    Além disso, promove um ambiente de trabalho mais seguro e produtivo.
                </p>
                <ul className='text-xl text-gray-600 max-w-2xl mx-auto mb-3'>
                    <li>Redução de acidentes de trabalho</li>
                    <li>Conformidade com normas regulamentadoras</li>
                    <li>Economia com multas e processos</li>
                    <li>Melhoria da produtividade</li>
                </ul>
            </div>
            <div className='about-image'>
                <img src={img_banner} alt="Profissional de segurança do trabalho" className='w-100 h-auto rounded-lg shadow-lg' />
            </div>
        </div>
    </div>
    )
}

export default About