"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdOutlineClearAll, MdDirectionsBoat } from "react-icons/md";
import { BsBicycle, BsFillHouseDoorFill } from "react-icons/bs";
import { GiSailboat, GiPineTree } from "react-icons/gi";

import "./ModalImages.scss";
import "../../styles/index.scss";

const subcategoriasLazer = [
  { id: "lazer-1", label: "Carrinho de Rolim\u00e3" },
  { id: "lazer-2", label: "Jogo de Taco" },
  { id: "lazer-3", label: "Frescobol" },
  { id: "lazer-4", label: "Piscinas" },
  { id: "lazer-5", label: "Quadra Poliesportiva" },
  { id: "lazer-6", label: "Sauna Seca e Sauna a Vapor" },
  { id: "lazer-7", label: "Playground" },
];

const imagensPorSubcategoriaLazer: Record<string, string[]> = {
  "lazer-1": ["lazer-1a"],
  "lazer-2": ["lazer-2a"],
  "lazer-3": ["lazer-3a"],
  "lazer-4": ["lazer-4a"],
  "lazer-5": ["lazer-5a", "lazer-5b"],
  "lazer-6": ["lazer-6a"],
  "lazer-7": ["lazer-7a", "lazer-7b"],
};

const videosPorSubcategoriaLazer: Record<string, string[]> = {
  "lazer-1": ["/galeria/lazer-1.mp4"],
  "lazer-2": ["/galeria/lazer-2.mp4"],
  "lazer-3": ["/galeria/lazer-3.mp4"],
  "lazer-4": ["/galeria/lazer-4.mp4"],
  "lazer-5": ["/galeria/lazer-5.mp4"],
};

const categorias = [
  {
    id: "iate",
    label: "Fotos e Videos Casa Setor Iate Clube",
    icon: <GiSailboat />,
    imagens: ["area", "cozinha", "escada", "jantar", "piscina", "sala"],
    prefixo: "/casas/casa-1/",
    videos: ["/galeria/iate.mp4", "/galeria/iate-1.mp4", "/galeria/iate-2.mp4"],
  },
  {
    id: "marina",
    label: "Fotos e Videos Casa Setor Marina Clube",
    icon: <GiPineTree />,
    imagens: [
      "americana",
      "banheiro",
      "cozinha",
      "lazer",
      "sala",
      "sofa",
      "lazer-1",
      "lazer-2",
      "lazer-3",
      "lazer-4",
      "lazer-5",
    ],
    prefixo: "/casas/casa-2/",
    videos: [
      "/galeria/marina.mp4",
      "/galeria/marina-1.mp4",
      "/galeria/marina-2.mp4",
      "/galeria/marina-3.mp4",
    ],
  },
  {
    id: "infra",
    label: "Fotos e Videos Infraestrutura de Lazer",
    icon: <BsFillHouseDoorFill />,
    imagens: Array.from({ length: 12 }, (_, i) => `infra-${i + 1}`),
    prefixo: "/galeria/imagens/",
    videos: Array.from({ length: 6 }, (_, i) => `/galeria/infra-${i + 1}.mp4`),
  },
  {
    id: "nautico",
    label: "Passeios N\u00e1uticos",
    icon: <MdDirectionsBoat />,
    imagens: [],
    prefixo: "",
    videos: Array.from(
      { length: 26 },
      (_, i) => `/galeria/nautico-${i + 1}.mp4`
    ).filter((v) => !v.includes("-2.mp4") && !v.includes("-16.mp4")),
  },
  {
    id: "lazer",
    label: "Lazer",
    icon: <BsBicycle />,
    imagens: [1, 2, 3, 4, 5, 6].map((n) => `lazer-${n}`),
    prefixo: "/galeria/imagens/",
    videos: [],
  },
];

export default function ModalImages() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);
  const [subcategoriaAtiva, setSubcategoriaAtiva] = useState<string | null>(
    null
  );
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const lazerRef = useRef<HTMLDivElement>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const categoriasFiltradas = categoriaAtiva
    ? categorias.filter((c) => c.id === categoriaAtiva)
    : categorias;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        lazerRef.current &&
        !lazerRef.current.contains(event.target as Node)
      ) {
        setMostrarDropdown(false);
      }
    };

    if (mostrarDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mostrarDropdown]);

  return (
    <>
      <div className="box-galeria">
        <div className="base">
          <div className="categorias">
            <p className="title">Veja por categoria:</p>
            <div className="botoes">
              <button
                className={!categoriaAtiva ? "actived" : ""}
                onClick={() => {
                  setCategoriaAtiva(null);
                  setSubcategoriaAtiva(null);
                }}
              >
                <MdOutlineClearAll /> Todas as Fotos e Videos
              </button>

              {categorias
                .filter((cat) => cat.id !== "lazer")
                .map((cat) => (
                  <button
                    key={cat.id}
                    className={categoriaAtiva === cat.id ? "actived" : ""}
                    onClick={() => {
                      setCategoriaAtiva(cat.id);
                      setSubcategoriaAtiva(null);
                    }}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}

              <div ref={lazerRef} style={{ position: "relative" }}>
                <button onClick={() => setMostrarDropdown(!mostrarDropdown)}>
                  <BsBicycle /> Lazer
                </button>
                <div className={`dropdown ${mostrarDropdown ? "ativo" : ""}`}>
                  {subcategoriasLazer.map((sub) => (
                    <button
                      key={sub.id}
                      className={subcategoriaAtiva === sub.id ? "actived" : ""}
                      onClick={() => {
                        setCategoriaAtiva("lazer");
                        setSubcategoriaAtiva(sub.id);
                        setMostrarDropdown(false);
                      }}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {categoriasFiltradas.map((cat) => {
            let imagensFiltradas = cat.imagens;
            let videosFiltrados = cat.videos;

            if (cat.id === "lazer") {
              if (!categoriaAtiva && !subcategoriaAtiva) {
                const imagensSub = Object.values(
                  imagensPorSubcategoriaLazer
                ).flat();
                const videosSub = Object.values(
                  videosPorSubcategoriaLazer
                ).flat();
                imagensFiltradas = [...cat.imagens, ...imagensSub];
                videosFiltrados = [...cat.videos, ...videosSub];
              } else if (subcategoriaAtiva) {
                imagensFiltradas =
                  imagensPorSubcategoriaLazer[subcategoriaAtiva] || [];
                videosFiltrados = Object.values(
                  videosPorSubcategoriaLazer
                ).flat(); // Todos os vídeos
              }
            }

            return (
              <div className={`outros ${cat.id}`} key={cat.id}>
                <h2 className="title-main">
                  {cat.label === "Lazer" &&
                  !categoriaAtiva &&
                  !subcategoriaAtiva
                    ? "Lazer Santa Cristina XIII"
                    : `${cat.label} Santa Cristina XIII`}
                </h2>

                <div className="content">
                  {imagensFiltradas.map((img) => (
                    <Image
                      key={img}
                      src={`${cat.prefixo || ""}${img}.jpg`}
                      alt={img}
                      width={240}
                      height={240}
                      className="cursor-pointer"
                      onClick={() =>
                        openModal(`${cat.prefixo || ""}${img}.jpg`)
                      }
                    />
                  ))}
                </div>

                <div className="content-videos">
                  {videosFiltrados.map((v, idx) => (
                    <video key={idx} src={v} controls />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="container">
            <Image
              src={modalImage}
              alt="Imagem ampliada"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button className="closeModal" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
