"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../../styles/sobre.scss";

export default function Sobre() {

    const [count5, setCount5] = useState(0);
    const [count134, setCount134] = useState(0);
    const [count60, setCount60] = useState(0);
    const [count56, setCount56] = useState(0);

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const startedRef = useRef(false);

    function animateValue(
        setter: React.Dispatch<React.SetStateAction<number>>,
        finalValue: number,
        duration: number
    ) {
        let startTimestamp: number | null = null;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * finalValue);

            setter(value);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                if (entries[0].isIntersecting && !startedRef.current) {

                    startedRef.current = true;

                    animateValue(setCount5, 5, 2000);
                    animateValue(setCount134, 134, 2200);
                    animateValue(setCount60, 60, 2000);
                    animateValue(setCount56, 5600, 2400);

                    observer.disconnect();
                }

            },
            {
                threshold: 0.15, // funciona bem em mobile
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    return (
        <section className="sessao-sobre" id="quem-somos" ref={sectionRef}>
            <div className="container-sobre">

                <div className="coluna-imagem">
                    <Image
                        src="/imagensIndex/image2.webp"
                        alt="Painel Solar"
                        width={600}
                        height={700}
                        className="imagem-sobre"
                        priority
                        quality={100}
                    />
                </div>

                <div className="coluna-texto">

                    <span className="etiqueta-sobre">Sobre nós</span>

                    <h2 className="titulo-sobre">
                        Transformamos luz solar<br />em energia inteligente
                    </h2>

                    <p className="descricao-sobre">
                        Na Solare Sistemas, desenvolvemos soluções fotovoltaicas que entregam economia imediata, eficiência e sustentabilidade para residências e empresas.
                    </p>

                    <p className="descricao-sobre">
                        Trabalhamos com tecnologia de ponta e projetos personalizados, garantindo instalações seguras, alto desempenho e resultados reais desde o primeiro dia.
                    </p>

                    <a href="/projetos" className="botao-sobre">
                        Ver mais
                    </a>

                    <div className="metricas">

                        <div className="bloco-metrica">
                            <h3>{count5}+</h3>
                            <span>Anos de Experiência</span>
                        </div>

                        <div className="bloco-metrica">
                            <h3>{count134}+</h3>
                            <span>Projetos <br /> Completos</span>
                        </div>

                        <div className="bloco-metrica">
                            <h3>{count60}+</h3>
                            <span>Resultados <br /> Entregues</span>
                        </div>

                        <div className="bloco-metrica">
                            <h3>{(count56 / 1000).toFixed(1)}K</h3>
                            <span>Clientes <br /> Satisfeitos</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}