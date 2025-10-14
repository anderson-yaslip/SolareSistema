module.exports = [
"[project]/src/components/Contratadas/ImagensContratadas/ImagensContratadas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ImageGallery = ({ contratada, imageCount, className })=>{
    const images = Array.from({
        length: imageCount
    }, (_, i)=>`/imgs-contratadas/${contratada}-${String(i + 1).padStart(2, "0")}.webp`);
    const [modalImage, setModalImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const openModal = (src)=>setModalImage(src);
    const closeModal = ()=>setModalImage(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: src,
                    title: `Imagem ${idx + 1} de ${contratada}`,
                    alt: `Imagem ${idx + 1} de ${contratada}`,
                    width: 600,
                    height: 400,
                    className: `${className} img-responsive`,
                    onClick: ()=>openModal(src),
                    onError: (e)=>e.currentTarget.style.display = "none"
                }, idx, false, {
                    fileName: "[project]/src/components/Contratadas/ImagensContratadas/ImagensContratadas.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            modalImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal",
                onClick: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: modalImage,
                            alt: "Imagem ampliada",
                            width: 800,
                            height: 600,
                            className: "rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contratadas/ImagensContratadas/ImagensContratadas.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "closeModal",
                            onClick: closeModal,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contratadas/ImagensContratadas/ImagensContratadas.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contratadas/ImagensContratadas/ImagensContratadas.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Contratadas/ImagensContratadas/ImagensContratadas.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ImageGallery;
}),
"[project]/src/data/pagesData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "pagesData",
    ()=>pagesData
]);
const pagesData = [
    {
        contratada: "pagina-exemplo",
        title: "Titulo da página",
        palavra: "Página de Exemplo",
        description: "Exemplo",
        keywords: "Exemplo",
        imageCount: 1,
        content: `
			<p>
				Alugar, primeiramente, uma casa na represa de Avaré é uma opção prática para
				quem busca descanso, lazer e contato com a natureza. Contudo, a região oferece
				imóveis com acesso direto à água, <a href="aluga-casa-na-represa-de-paranapanema">infraestrutura completa</a> e atividades para
				todas as idades. Portanto, neste guia, veja como escolher a melhor localização
				e aproveitar ao máximo sua estadia.
			</p>
			<div class="sumario">
				<h2>Sumário</h2>
				<ol>
					<li>
						<a href="#por-que-alugar-uma-casa-na-represa-de-avare-e-uma-excelente-escolha"
							>Por que alugar uma casa na represa de Avaré é uma excelente escolha?</a
						>
						<ol>
							<li>
								<a href="#vantagens-de-se-hospedar-a-beira-da-represa"
									>Vantagens de se hospedar à beira da represa</a
								>
							</li>
							<li>
								<a href="#conexao-com-a-natureza-e-tranquilidade">Conexão com a natureza e tranquilidade</a>
							</li>
							<li>
								<a href="#atividades-para-toda-a-familia">Atividades para toda a família</a>
							</li>
						</ol>
					</li>
					<li>
						<a href="#melhores-localizacoes-para-aluguel-de-casas-na-represa"
							>Melhores localizações para aluguel de casas na represa</a
						>
						<ol>
							<li><a href="#bairro-costa-azul">Bairro Costa Azul</a></li>
							<li><a href="#riviera-de-santa-cristina">Riviera de Santa Cristina</a></li>
							<li><a href="#orla-do-camping-municipal">Orla do Camping Municipal</a></li>
						</ol>
					</li>
					<li><a href="#contato">ENTRE EM CONTATO</a></li>
				</ol>
			</div>
			<h2 id="por-que-alugar-uma-casa-na-represa-de-avare-e-uma-excelente-escolha">
				Por que alugar uma casa na represa de Avaré é uma excelente escolha?
			</h2>
			<p>
				Alugar uma casa na represa de Avaré oferece, a princípio, acesso direto a uma
				das <a href="locacao-riviera-santa-cristina-preco">maiores áreas de lazer</a> do interior paulista. A represa permite contato
				diário com água limpa e espaços abertos para descanso ou prática esportiva. Ou
				seja, a região atrai visitantes que buscam praticidade, privacidade e
				liberdade durante a estadia.
			</p>

			<h3 id="vantagens-de-se-hospedar-a-beira-da-represa">Vantagens de se hospedar à beira da represa</h3>
			<p>
				<a href="aluguel-de-casa-na-riviera-de-santa-cristina">Casas à beira da represa</a> oferecem vista privilegiada e acesso facilitado à
				água. Muitas propriedades disponibilizam píer, rampa para barcos e
				equipamentos de lazer aquático. Em outras palavras, a hospedagem nesse perfil
				reduz deslocamentos e amplia o tempo de aproveitamento do dia.
			</p>

			<h3 id="conexao-com-a-natureza-e-tranquilidade">Conexão com a natureza e tranquilidade</h3>
			<p>
				A possui vegetação preservada e baixa densidade
				urbana. O ambiente favorece descanso, caminhadas ao ar livre e observação da
				fauna local. Ainda assim, a ausência de ruídos urbanos contribui para uma
				experiência mais silenciosa e equilibrada.
			</p>

			<h3 id="atividades-para-toda-a-familia">Atividades para toda a família</h3>
			<p>
				A represa possibilita práticas como stand-up paddle, caiaque, pesca e passeios
				de lancha. Famílias com crianças encontram espaços seguros para recreação em
				meio à natureza. Dessa forma, a região também conta com trilhas, restaurantes
				e pontos turísticos próximos, que ampliam as opções de lazer.
			</p>

			<h2 id="melhores-localizacoes-para-aluguel-de-casas-na-represa">
				Melhores localizações para aluguel de casas na represa
			</h2>
			<p>
				A <a href="alugo-casa-na-represa-de-avare">represa de Avaré</a> reúne, em primeiro lugar, bairros e condomínios com boa
				oferta de casas para temporada. As principais regiões concentram
				infraestrutura turística e acesso facilitado à água. Entretanto, quem busca
				praticidade encontra diversas opções conforme o estilo da viagem.
			</p>

			<h3 id="bairro-costa-azul">Bairro Costa Azul</h3>
			<p>
				O bairro Costa Azul possui acesso direto à represa e concentra casas com
				estrutura para famílias. Nesse sentido, a região conta com mercados, marinas e
				opções de lazer próximas. Muitos que procuram alguma casa na represa de Avaré
				consideram o bairro pela conveniência e localização.
			</p>

			<h3 id="riviera-de-santa-cristina">Riviera de Santa Cristina</h3>
			<p>
				A Riviera de Santa Cristina reúne condomínios fechados com imóveis voltados ao
				turismo de lazer. O local mantém segurança 24 horas, áreas comuns e acesso a
				trilhas e marinas. No entanto, a demanda por <strong>aluga casa na represa de Avaré</strong>
				cresce nessa região em feriados e temporadas.
			</p>

			<h3 id="orla-do-camping-municipal">Orla do Camping Municipal</h3>
			<p>
				A orla do Camping Municipal oferece casas próximas ao centro e à área pública
				da represa. Em suma, a região permite fácil acesso à praia artificial,
				quiosques e atividades esportivas. Grupos e famílias escolhem a orla pela
				economia e facilidade de acesso a serviços urbanos.
			</p>

			<h2 id="contato">ENTRE EM CONTATO</h2>
			<p>
				Entre em contato, primordialmente, com os proprietários ou administradores dos
				imóveis para verificar disponibilidade, valores e condições de reserva.
				Todavia, garanta sua estadia com antecedência, especialmente em feriados e
				alta temporada na <a href="aluga-se-casa-na-represa-de-avare">região da represa de Avaré</a>.
			</p>
		`
    }
];
const __TURBOPACK__default__export__ = pagesData;
}),
"[project]/src/components/Contratadas/OutrosAssuntos/OutrosAssuntos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OutrosAssuntos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pagesData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function OutrosAssuntos({ title }) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        Infinity: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "outros-assuntos",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    "Outros assuntos relacionados a ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Contratadas/OutrosAssuntos/OutrosAssuntos.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...settings,
                className: "outros-assuntos-slider",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "outros-assuntos-item",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `/${page.contratada}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "",
                                    src: `/imgs-contratadas/${page.contratada}-01.webp`,
                                    alt: page.title,
                                    width: 300,
                                    height: 200,
                                    onError: (e)=>e.currentTarget.style.display = "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contratadas/OutrosAssuntos/OutrosAssuntos.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: page.palavra
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contratadas/OutrosAssuntos/OutrosAssuntos.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contratadas/OutrosAssuntos/OutrosAssuntos.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, page.contratada, false, {
                        fileName: "[project]/src/components/Contratadas/OutrosAssuntos/OutrosAssuntos.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Contratadas/OutrosAssuntos/OutrosAssuntos.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Contratadas/OutrosAssuntos/OutrosAssuntos.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_caa29f4e._.js.map