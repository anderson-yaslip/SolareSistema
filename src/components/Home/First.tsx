"use client";

import { MoveUpRight } from "lucide-react";
import "../../styles/index.scss";

export default function First() {

  return (
    <>
      <section className="primeira-sessao" id="baneficios">
        <div className="conteudo-principal">

          <div className="containerSelo">
            <span className="selo-verde">• benefícios reais da energia solar</span>
          </div>

          <h1>
            Invista em energia solar e <strong>garanta economia</strong>, segurança e independência energética para sua casa ou empresa.
          </h1>

          <div className="lista-cartoes">

            <div className="cartao">
              <h3>Economia Garantida</h3>
              <p>Reduza sua conta de energia em até 95% e comece a economizar já no primeiro mês.</p>
              <a href="/informacoes" className="botaoSeta">
                <MoveUpRight size={20} />
              </a>
            </div>

            <div className="cartao">
              <h3>Proteção contra Reajustes</h3>
              <p>As tarifas de energia sobem todos os anos. Com energia solar, você se protege dos aumentos.</p>
              <a href="/pagina-exemplo" className="botaoSeta">
                <MoveUpRight size={20} />
              </a>
            </div>

            <div className="cartao cartao-destaque">
              <h3>Valorização e Oportunidade</h3>
              <p>Seu imóvel ganha valor no mercado e você ainda pode transformar energia solar em lucro.</p>
              <a href="/pagina-exemplo" className="botaoSeta">
                <MoveUpRight size={20} />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}