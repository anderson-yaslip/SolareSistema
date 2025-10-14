import Link from "next/link";

export default function GridGallery() {
  return (
    <div className="grid-gallery">
      <div className="base">
        <div className="item-1 gallery-item">
          <p className="grid-text">As melhores casas</p>
        </div>
        <div className="item-2 gallery-item">
          <p className="grid-text">Infraestrutura sofisticada</p>
        </div>
        <Link href="/casas" className="item-3 gallery-item">
          <p className="grid-text">Casas</p>
        </Link>
        <Link href="/galeria" className="item-4 gallery-item">
          <p className="grid-text">Galeria</p>
        </Link>
      </div>
    </div>
  );
}
