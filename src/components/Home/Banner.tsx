import PrimaryButton from "../PrimaryButton";

export default function Banner() {
  return (
    <div className="banner">
      <div className="text-banner">
        <h1>
          <span>Santa Cristina XIII</span>
          <br />
          Residências Exclusivas
        </h1>
        <p>
          O Riviera de Santa Cristina XIII é o lugar perfeito para viver
          momentos inesquecíveis. Imagine-se cercado por paisagens
          deslumbrantes, tranquilidade e uma infraestrutura completa para lazer
          e descanso.
        </p>
        <PrimaryButton link="/contato" content="Saiba mais" variant="primary" />
      </div>
    </div>
  );
}
