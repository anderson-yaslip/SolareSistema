"use client";

import { settings } from "@/settings/settings";
import "@/partials/Topo/topo.scss";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BsTelephoneForward } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import { useEffect, useState } from "react";
import { josefinSans } from "@/lib/fonts";
import HamburgerMenu from "@/components/HamburgerMenu";

const { numeroTelefone, numeroWhatsapp, ddd, whatsappApi, email } = settings;

export default function Topo() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsFixed(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMobile = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className={isFixed ? "topo fixed" : "topo"}>

        <div className="topo-contato">
          <div className={`base ${josefinSans.className}`}>
            <Link href={`tel:0${ddd}${numeroTelefone}`} target="_blank">
              <BsTelephoneForward /> {`(${ddd}) ${numeroTelefone}`}
            </Link>

            {numeroWhatsapp && (
              <Link href={whatsappApi} target="_blank">
                <FaWhatsapp /> {`(${ddd}) ${numeroWhatsapp}`}
              </Link>
            )}

            <Link href={`mailto:${email}`} target="_blank">
              <MdMail /> {`${email}`}
            </Link>
          </div>
        </div>

        {/* MENU + LOGO */}
        <div className="topo-menu">
          <div className="base">

            {/* LOGO escondido no início */}
            <Link href="/" className="logo-wrapper">
              <Image
                src="/logo.webp"
                width={150}
                height={60}
                alt="Logo do site"
                className="logo"
              />
            </Link>

            {/* LINKS */}
            <ul className="topo-links">
              <li className="topo-item"><Link href="/">Home</Link></li>
              <li className="topo-item"><Link href="/quem-somos">Quem Somos</Link></li>
              <li className="topo-item"><Link href="/baneficios">Benefícios</Link></li>
              <li className="topo-item"><Link href="/onde-instalar">Onde instalar</Link></li>
              <li className="topo-item"><Link href="/projetos">Projetos</Link></li>
              <li className="topo-item"><Link href="/informacoes">.</Link></li>
              {/* <li className="topo-item"><Link href="/servicos">Serviços</Link></li> */}
            </ul>

            <Link href="/contato" className="botao-contato">
              Entre em contato
            </Link>

            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMobile} />
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className={`menu-mobile ${isMenuOpen ? "open" : ""}`}>
        <ul className="topo-links-mobile">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/quem-somos">Quem Somos</Link></li>
          <li><Link href="/beneficios">Benefícios</Link></li>
          <li><Link href="/onde-instalar">Onde instalar</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/informacoes">.</Link></li>
        </ul>
      </div>
    </header>
  );
}