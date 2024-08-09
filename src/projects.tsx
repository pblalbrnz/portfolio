import magixDefaultRed from "./assets/magix/magix_default_red.png";
import magixDefaultBlue from "./assets/magix/magix_default_blue.png";
import magixDefaultWhite from "./assets/magix/magix_default_white.png";
import magixAlt from "./assets/magix/magix_alt.png";
import magixPB from "./assets/magix/magix_pb.png";
import magixBP from "./assets/magix/magix_bp.png";
import cantodosk from "./assets/cantodosk/cantodosk.jpg";
import aurora from "./assets/aurora/aurora.png";
import neekoDefault from "./assets/neekostyle/SignDefault.png";
import neekoDefaultAlt from "./assets/neekostyle/SignDefaultAlt.png";
import neekoTypoDefault from "./assets/neekostyle/TypoDefault.png";
import neekoTypoPB from "./assets/neekostyle/TypoPB.png";
import neekoTypoBP from "./assets/neekostyle/TypoBP.png";
import neekoIconDefault from "./assets/neekostyle/IconDefault.png";
import neekoIconDefaultAlt from "./assets/neekostyle/IconDefaultAlt.png";
import neekoIconBlue from "./assets/neekostyle/IconBlue.png";
import neekoIconYellow from "./assets/neekostyle/IconYellow.png";
import neekoIconPB from "./assets/neekostyle/IconPB.png";
import neekoIconBP from "./assets/neekostyle/IconBP.png";
import pokedexIcon from "./assets/pokedex/pokedexIcon.png";

export const projects = [
  {
    id: "magixkids",
    name: "Magix Redesign",
    brand_name: "Magix Kids",
    accent: "red",
    description: (
      <>
        O projeto consiste no redesign completo da marca Magix Kids, uma empresa
        com mais de 10 anos de experiência na fabricação de massinha de modelar
        e giz de cera, produtos vendidos para comércios que os revendem.
        <br />
        Esse projeto é <u>ficcional</u> e foi criado enquanto eu cursava
        <b> Design Gráfico </b>
        pela{" "}
        <i>
          <a
            target="_blank"
            href="https://fascs.com.br/"
            className="underline text-purple-600"
          >
            Fundação das Artes de São Caetano do Sul
          </a>
        </i>
        .
      </>
    ),
    thumb: magixDefaultRed,
    imgs: [
      {
        img: magixDefaultBlue,
        alt: "DefaultBlue",
      },
      {
        img: magixDefaultWhite,
        alt: "DefaultWhite",
      },
      {
        img: magixAlt,
        alt: "Alternative",
      },
      {
        img: magixPB,
        alt: "Black&White",
      },
      {
        img: magixBP,
        alt: "Black&WhiteAlt",
      },
    ],
    href: "https://behance.net/pabloalbrnz",
  },
  {
    id: "cantodosk",
    name: "cantodosk",
    description: (
      <>
        Este projeto consiste em uma página de Instagram dedicada a explorar e
        compartilhar curiosidades fascinantes do vasto universo da cultura pop.
        A página busca ser um ponto de encontro para fãs de todas as idades,
        oferecendo insights únicos sobre filmes, séries, quadrinhos, música,
        games, e muito mais.
      </>
    ),
    accent: "purple",
    thumb: cantodosk,
    href: "https://behance.net/pabloalbrnz",
  },
  {
    id: "aurorav4",
    name: "Aurora v4",
    description: (
      <>
        Este projeto é uma plataforma web de central de produtividade,
        integrando ferramentas essenciais para o dia a dia em um único lugar.
        <br />A ideia central é criar um ambiente prático e eficiente, onde o
        usuário pode acessar rapidamente informações e funcionalidades sem
        precisar abrir várias abas ou aplicativos separados.
      </>
    ),
    accent: "violet",
    thumb: aurora,
    href: "https://pblalbrnz.github.io/Aurora-v4/",
  },
  {
    id: "neekostyle",
    name: "Neeko Style",
    description: (
      <>
        O projeto consiste na criação e no desenvolvimento da identidade visual
        de uma marca fictícia de roupas femininas inspirada no personagem{" "}
        <a
          target="_blank"
          href="https://leagueoflegends.com/pt-br/champions/neeko/"
          className="text-purple-600 underline italic"
        >
          Neeko
        </a>
        , do jogo{" "}
        <a
          target="_blank"
          href="https://leagueoflegends.com/pt-br"
          className="text-purple-600 underline italic"
        >
          League of Legends
        </a>
        .<br />A marca, cujo nome será Neeko Style, captura a essência da
        natureza e dos traços característicos da personagem, oferecendo peças
        únicas que combinam estilo, conforto e um toque de fantasia.
      </>
    ),
    accent: "purple",
    thumb: neekoDefault,
    imgs: [
      { img: neekoDefaultAlt, alt: "SignAlt" },
      { img: neekoTypoDefault, alt: "TypoDefault" },
      { img: neekoTypoPB, alt: "TypoPB" },
      { img: neekoTypoBP, alt: "TypoBP" },
      { img: neekoIconDefault, alt: "IconDefault" },
      { img: neekoIconDefaultAlt, alt: "IconDefaultAlt" },
      { img: neekoIconBlue, alt: "IconBlue" },
      { img: neekoIconYellow, alt: "IconYellow" },
      { img: neekoIconPB, alt: "IconPB" },
      { img: neekoIconBP, alt: "IconBP" },
    ],
  },
  {
    id: "pokedex",
    name: "Pokedex",
    description: (
      <>
        O projeto consiste na criação de uma Pokédex interativa, desenvolvida
        com as tecnologias React, HTML, CSS, JavaScript e TypeScript,
        demonstrando a capacidade de utilizar essas ferramentas para criar uma
        aplicação web moderna e dinâmica. A Pokédex permite aos usuários
        explorar e visualizar informações detalhadas sobre os Pokémon, como
        tipos, habilidades, evoluções, e estatísticas.
      </>
    ),
    accent: "red",
    thumb: pokedexIcon,
    href: "https://pblalbrnz.github.io/pokedex",
  },
];
