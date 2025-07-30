import { Carousel, initTWE } from "tw-elements";
import { useEffect } from "react";
import "./Home.css"

const Home = () => {
  
  useEffect(() => {
    initTWE({ Carousel });
  }, []);

  return (
    <div className="home site-container">
      <div className="home-text">
          <h1 className="text-4xl lg:text-5xl font-bold text-white-800 leading-tight">
            Proteja sua empresa com <span className="text-blue-600">consultoria especializada</span> em segurança do
            trabalho
          </h1>
        <p className="text-xl">Oferecemos treinamentos, análises de risco e consultoria completa 
        para manter sua equipe segura e sua empresa em conformidade com as normas regulamentadoras.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="btn">
            Solicitar Orçamento
          </button>
          <button className="btn-white">
            Conheça nossos serviços
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home