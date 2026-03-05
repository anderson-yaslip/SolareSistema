"use client";

import Image from "next/image";
import "../../styles/four.scss";

function Four() {

    return (
        <>
            <section className="containerFour" id="onde-instalar">
                <div className="linha-textos">

                    <div className="coluna-esquerda">
                        <p className="descricao">
                            A energia solar é versátil e se adapta a diferentes tipos de necessidades, oferecendo economia, eficiência e autonomia energética para diversos segmentos. De residências a grandes estruturas comerciais, as aplicações são amplas e trazem benefícios reais desde o primeiro dia.
                        </p>

                        <a href="#" className="botao-acao">Ver mais</a>
                    </div>

                    <div className="coluna-direita">
                        <p className="subtitulo">Aplicações</p>
                        <h2 className="titulo">
                            Soluções Solares <br /> para Diferentes Setores
                        </h2>
                    </div>
                </div>

                <div className="grade-cards">
                    <div className="card">
                        <Image
                            src="/imagensIndex/image4.webp"
                            alt="Painel solar"
                            width={900}
                            height={500}
                        />
                        <div className="card-info">
                            <h3>Residências</h3>
                            <p>Economize até 95% na conta de energia instalando um sistema fotovoltaico na sua casa.</p>
                        </div>
                    </div>

                    <div className="card">
                        <Image
                            src="/imagensIndex/image3.webp"
                            alt="Painel solar"
                            width={900}
                            height={500}
                        />
                        <div className="card-info">
                            <h3>Indústrias</h3>
                            <p>Reduza custos operacionais e aumente a eficiência energética com geração própria.</p>
                        </div>
                    </div>

                    <div className="card">
                        <Image
                            src="/imagensIndex/image5.webp"
                            alt="Painel solar"
                            width={900}
                            height={500}
                        />
                        <div className="card-info">
                            <h3>Comércios e Escritórios</h3>
                            <p>Adote energia solar para diminuir despesas e tornar seu negócio mais sustentável.</p>
                        </div>
                    </div>

                    <div className="card">
                        <Image
                            src="/imagensIndex/image6.webp"
                            alt="Painel solar"
                            width={900}
                            height={500}
                        />
                        <div className="card-info">
                            <h3>Área Rural</h3>
                            <p>Energia limpa para bombeamento de água, maquinário e operações agrícolas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Four;