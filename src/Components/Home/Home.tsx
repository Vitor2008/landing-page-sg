import "./Home.css"
import banner_home from "../../assets/images/banner-home.png"

const Home = () => {
  return (
    <div className="home container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Proteja sua empresa com <span className="text-blue-600">consultoria especializada</span> em segurança do
                trabalho
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Oferecemos treinamentos, análises de risco e consultoria completa para manter sua equipe segura e sua
                empresa em conformidade com as normas regulamentadoras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-{10}">
                <button>
                  Solicite um Orçamento
                </button>
                <button className="btn-white">
                  Conheça nossos serviços
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={banner_home}
                alt="Técnico de segurança do trabalho em ação"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
        </div>
    </div>
  )
}

export default Home