"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {

  return (

    <>
      <div className="containerBanner">

        <div className="containerBannerOne">

          <div className="containerLogo">
            <Link href="/">
              <Image alt="Imagem" src="/logo.webp" width={250} height={100} quality={100} />
            </Link>
          </div>

          <h2>Energia Solar para um Futuro Mais Inteligente</h2>
          <div className="containerText">
            <p>Transforme a luz do sol em economia real e sustentável. A Solare Sistemas oferece soluções completas em energia fotovoltaica para residências, empresas e indústrias, entregando segurança, eficiência e redução imediata na sua conta de luz.</p>
            <button>Ver mais</button>
          </div>

          <div className="containerCards">

            <div className="cardOne">
              <p>1200</p>
              <p>
                Clientes já<br />
                escolheram nossos painéis
              </p>
              <p>Energia que gera valor</p>
                <img src="/imagensIndex/image2.webp" alt="" />
            </div>

            <div className="cardTwo">
              <img src="/imagensIndex/image1.webp" alt="" />
            </div>
          </div>

        </div>

        <div className="banner">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-item banner-1">
                <div className="texto">
                  <h2>Reduza sua Conta de Luz em até 95%</h2>
                  <p>
                    Invista em energia solar e comece a economizar já no primeiro mês.
                    Projetos personalizados para residências e empresas, com instalação
                    segura, rápida e garantia de desempenho.
                  </p>
                  <Link href="/sobre">Saiba mais</Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-item banner-2">
                <div className="texto">
                  <h2>Proteja-se dos Aumentos na Energia</h2>
                  <p>
                    As tarifas de energia sobem todos os anos. Com um sistema fotovoltaico,
                    você garante previsibilidade, autonomia energética e mais segurança
                    financeira para o seu imóvel ou negócio.
                  </p>
                  <Link href="/sobre">Saiba mais</Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-item banner-3">
                <div className="texto">
                  <h2>Energia Sustentável que Gera Valor</h2>
                  <p>
                    Valorize seu imóvel, reduza custos operacionais e contribua para um
                    futuro mais sustentável com soluções solares modernas, eficientes e
                    de alta performance.
                  </p>
                  <Link href="/sobre">Saiba mais</Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
