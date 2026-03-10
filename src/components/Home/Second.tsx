"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../../styles/sobre.scss";

export default function Sobre() {

    const [count20, setCount20] = useState(0);
    const [count134, setCount134] = useState(0);
    const [count60, setCount60] = useState(0);
    const [count56, setCount56] = useState(0);

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [started, setStarted] = useState(false);

    function animateValue(
        setter: React.Dispatch<React.SetStateAction<number>>,
        finalValue: number,
        duration: number
    ): void {
        let start = 0;
        const increment = finalValue / (duration / 16);

        const tick = () => {
            start += increment;
            if (start >= finalValue) {
                setter(finalValue);
            } else {
                setter(Math.floor(start));
                requestAnimationFrame(tick);
            }
        };

        tick();
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started) {
                    setStarted(true);

                    // Milessegundos, por exemplo: 3000ms para 20, 3500ms para 134, etc.
                    animateValue(setCount20, 20, 3000);
                    animateValue(setCount134, 134, 3500);
                    animateValue(setCount60, 60, 3200);
                    animateValue(setCount56, 5600, 3800);
                }
            },
            { threshold: 0.8 } // Inicia a animação quando 70% da seção estiver visível ou a porcentagem que preferir
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [started]);

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

                    <a href="/projetos" className="botao-sobre">Ver mais</a>

                    <div className="metricas">

                        <div className="bloco-metrica">
                            <h3>{count20}+</h3>
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