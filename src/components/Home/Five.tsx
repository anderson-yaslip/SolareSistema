"use client";

import { useState } from "react";
import Image from "next/image";
import "../../styles/five.scss";

export default function Five() {

    const avaliacoes = [
        {
            id: 1,
            nome: "Luiz Gomes",
            inicial: "L",
            texto:
                "Atendimento impecável, equipe muito dedicada e ágil em todo o processo. Experiência realmente excelente e que superou minhas expectativas.",
            imagem: "/solarTeste.jpg"
        },
        {
            id: 2,
            nome: "Carolina Freitas",
            inicial: "C",
            texto:
                "Excelente atendimento e instalação perfeita. Tudo muito rápido e organizado. Recomendo muito!",
            imagem: "/solarTeste.jpg"
        },
        {
            id: 3,
            nome: "Marcos Silva",
            inicial: "M",
            texto:
                "Equipe extremamente profissional, atenciosa e rápida na entrega do serviço. Excelente experiência.",
            imagem: "/solarTeste.jpg"
        }
    ];

    const [index, setIndex] = useState(0);

    const proximo = () => {
        setIndex((prev) => (prev + 1) % avaliacoes.length);
    };

    const anterior = () => {
        setIndex((prev) => (prev - 1 + avaliacoes.length) % avaliacoes.length);
    };

    const atual = avaliacoes[index];

    return (
        <section className="avaliacoes">

            <div className="topo">
                <span className="subtitulo">— Depoimentos</span>

                <h2 className="titulo">
                    O que nossos <span>clientes</span> dizem
                </h2>

                <div className="botoes">
                    <button className="seta" onClick={anterior}>←</button>
                    <button className="seta" onClick={proximo}>→</button>
                </div>
            </div>

            <div className="conteudo">

                <div className="lado-esquerdo">
                    <Image 
                        src={atual.imagem}
                        width={650}
                        height={450}
                        alt="Imagem avaliação"
                        className="imagem"
                    />
                </div>

                <div className="card">
                    <div className="estrelas">★★★★★</div>

                    <p className="texto">
                        {atual.texto}
                    </p>

                    <div className="autor">
                        <span className="inicial">{atual.inicial}</span>
                        <span className="nome">{atual.nome}</span>
                    </div>
                </div>

            </div>

        </section>
    );
}