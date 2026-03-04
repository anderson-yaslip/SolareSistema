"use client";

import { useState } from "react";
import "../../styles/three.scss";
import { Dot } from "lucide-react";

export default function Three() {
    const [ativo, setAtivo] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setAtivo(ativo === index ? null : index);
    };

    return (
        <>
            <div className="containerThree">
                <section className="faq">


                    <div className="containerSeloThree">
                        <span className="selo-verde">
                            <Dot size={30} />
                            FAQ
                        </span>
                    </div>

                    <h2>Perguntas Frequentes</h2>

                    <div className={`item ${ativo === 0 ? "ativo" : ""}`}>
                        <button className="pergunta" onClick={() => toggleFAQ(0)}>
                            O que é o serviço oferecido?
                            <span className="seta"></span>
                        </button>
                        <div className="resposta">
                            <p>
                                Nosso serviço consiste em fornecer soluções personalizadas para
                                atender às suas necessidades.
                            </p>
                        </div>
                    </div>

                    <div className={`item ${ativo === 1 ? "ativo" : ""}`}>
                        <button className="pergunta" onClick={() => toggleFAQ(1)}>
                            Como posso entrar em contato?
                            <span className="seta"></span>
                        </button>
                        <div className="resposta">
                            <p>
                                Você pode nos enviar uma mensagem pelo formulário, WhatsApp ou
                                e-mail.
                            </p>
                        </div>
                    </div>

                    <div className={`item ${ativo === 2 ? "ativo" : ""}`}>
                        <button className="pergunta" onClick={() => toggleFAQ(2)}>
                            Qual o prazo de entrega?
                            <span className="seta"></span>
                        </button>
                        <div className="resposta">
                            <p>
                                O prazo varia conforme o tipo de projeto, mas sempre informamos
                                tudo com clareza.
                            </p>
                        </div>
                    </div>

                    <div className="containerLink">
                        <div>
                            <p>Conte com nossa equipe para tirar dúvidas e orientar você sobre nossos serviços, atendimento e prazos. Estamos aqui para garantir clareza e segurança em cada etapa.</p>
                            <a href="">Ver mais</a>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}