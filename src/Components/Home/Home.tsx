import { Carousel, initTWE } from "tw-elements";
import { useEffect } from "react";
import "./Home.css"
// import banner_home from "../../assets/images/banner-home.png"

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
        <button className="btn">Solicitar Orçamento</button>
        <button className="btn-white">
          Conheça nossos serviços
        </button>
      </div>
    </div>
    // <div
    //   id="carouselExampleSlidesOnly"
    //   className="relative"
    //   data-twe-carousel-init
    //   data-twe-ride="carousel"
    //   data-twe-interval="3000">
    //   {/* <!--Carousel items--> */}
    //   <div
    //     className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    //     {/* <!--First item--> */}
    //     <div
    //       className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-twe-carousel-item
    //       data-twe-carousel-active>
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
    //         className="block w-full"
    //         alt="Wild Landscape" />
    //     </div>
    //     {/* <!--Second item--> */}
    //     <div
    //       className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-twe-carousel-item>
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
    //         className="block w-full"
    //         alt="Camera" />
    //     </div>
    //     {/* <!--Third item--> */}
    //     <div
    //       className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-twe-carousel-item>
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
    //         className="block w-full"
    //         alt="Exotic Fruits" />
    //     </div>
    //   </div>
    // </div>

    // <div className="home container mx-auto px-4">
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">
    //         <div className="space-y-6">
    //           <h1 className="bg-blue-100 text-blue-800 hover:bg-blue-100">
    //             Segurança do Trabalho
    //           </h1>
    //           <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
    //             Proteja sua empresa com <span className="text-blue-600">consultoria especializada</span> em segurança do
    //             trabalho
    //           </h1>
    //           <p className="text-xl text-gray-600 leading-relaxed">
    //             Oferecemos treinamentos, análises de risco e consultoria completa para manter sua equipe segura e sua
    //             empresa em conformidade com as normas regulamentadoras.
    //           </p>
    //           <div className="flex flex-col sm:flex-row gap-4 mt-{10}">
    //             <button>
    //               Solicite um Orçamento
    //             </button>
    //             <button className="btn-white">
    //               Conheça nossos serviços
    //             </button>
    //           </div>
    //         </div>
    //         <div className="relative">
    //           <img
    //             src={banner_home}
    //             alt="Técnico de segurança do trabalho em ação"
    //             width={600}
    //             height={500}
    //             className="rounded-lg shadow-xl"
    //           />
    //         </div>
    //     </div>
    // </div>
  )
}

export default Home