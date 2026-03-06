'use client'

import { useState } from "react";
import "./projetos.scss";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function Projetos() {
    const projetosArray = [
        { id: 1, title: "Projeto 1", image: "/solarTeste.jpg" },
        { id: 2, title: "Projeto 2", image: "/solarTeste.jpg" },
        { id: 3, title: "Projeto 3", image: "/solarTeste.jpg" },
        { id: 4, title: "Projeto 4", image: "/solarTeste.jpg" },
        { id: 5, title: "Projeto 5", image: "/solarTeste.jpg" },
        { id: 6, title: "Projeto 6", image: "/solarTeste.jpg" },
        { id: 7, title: "Projeto 7", image: "/solarTeste.jpg" },
    ];

    const galeriaArray = [
        { id: 1, title: "Projeto 1", image: "/imagensProjetos/projeto1.webp" },
        { id: 2, title: "Projeto 2", image: "/imagensProjetos/projeto2.webp" },
        { id: 3, title: "Projeto 3", image: "/imagensProjetos/projeto3.webp" },
        { id: 4, title: "Projeto 4", image: "/imagensProjetos/projeto4.webp" }
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [imagemAtualIndex, setImagemAtualIndex] = useState<number | null>(null);

    function abrirModal(index: number) {
        setImagemAtualIndex(index);
        setModalOpen(true);
    }

    function fecharModal() {
        setModalOpen(false);
        setImagemAtualIndex(null);
    }

    function imagemAnterior() {
        if (imagemAtualIndex !== null) {
            setImagemAtualIndex(
                imagemAtualIndex === 0 ? galeriaArray.length - 1 : imagemAtualIndex - 1
            );
        }
    }

    function proximaImagem() {
        if (imagemAtualIndex !== null) {
            setImagemAtualIndex(
                imagemAtualIndex === galeriaArray.length - 1 ? 0 : imagemAtualIndex + 1
            );
        }
    }

    return (
        <>
            <div className="containerServices">
                <h2>SOLARE - Projetos</h2>

                <div className="parent">
                    {projetosArray.map((projeto, index) => (
                        <div
                            key={projeto.id}
                            className={`div${index + 1}`}
                            style={{
                                backgroundImage: `url(${projeto.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            title={projeto.title}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="textosProjetos">
                <div className="texto">
                    <h3>Energia Solar Residencial</h3>
                    <p>
                        Sistemas fotovoltaicos para residências, proporcionando economia de
                        até 95% na conta de energia e autonomia elétrica para toda a família.
                    </p>
                </div>

                <div className="texto">
                    <h3>Empresas e Indústrias</h3>
                    <p>
                        Reduza custos operacionais e aumente a eficiência energética com
                        soluções solares personalizadas para o seu negócio.
                    </p>
                </div>

                <div className="texto">
                    <h3>Áreas Rurais e Agrícolas</h3>
                    <p>
                        Energia limpa para bombeamento de água, maquinário agrícola e
                        operações rurais, garantindo sustentabilidade e economia real.
                    </p>
                </div>
            </div>
            <div className="containerGaleria">
                <h2>Galeria de Projetos</h2>
                <div className="galeria">
                    {galeriaArray.map((galeria, index) => (
                        <div
                            key={galeria.id}
                            className="itemGaleria"
                            style={{
                                backgroundImage: `url(${galeria.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            title={galeria.title}
                            onClick={() => abrirModal(index)} 
                        ></div>
                    ))}
                </div>
            </div>

            {modalOpen && imagemAtualIndex !== null && (
                <div className="modalOverlay" onClick={fecharModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={galeriaArray[imagemAtualIndex].image}
                            alt="Imagem ampliada do projeto"
                        />
                        <button className="btnFechar" onClick={fecharModal}>
                            <X color="#000" size={30} />
                        </button>
                        <button className="btnLeft" onClick={imagemAnterior}>
                            <ChevronLeft color="#000" size={30} />
                        </button>
                        <button className="btnRight" onClick={proximaImagem}>
                            <ChevronRight color="#000" size={30} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Projetos;