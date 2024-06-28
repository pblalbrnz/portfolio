import magixDefaultRed from "./assets/magix/magix_default_red.png";
import magixDefaultBlue from "./assets/magix/magix_default_blue.png";
import magixDefaultWhite from "./assets/magix/magix_default_white.png";
import magixAlt from "./assets/magix/magix_alt.png";
import magixPB from "./assets/magix/magix_pb.png";
import magixBP from "./assets/magix/magix_bp.png";
import cantodosk from "./assets/cantodosk/cantodosk.jpg";
import aurora from "./assets/aurora/aurora.png";

export const projects = [
  {
    name: "Magix Kids Redesign",
    thumb: magixDefaultRed,
    imgs: [
      {
        img: magixDefaultBlue,
      },
      {
        img: magixDefaultWhite,
      },
      {
        img: magixAlt,
      },
      {
        img: magixPB,
      },
      {
        img: magixBP,
      },
    ],
    href: "https://behance.net/pulseim",
  },
  {
    name: "cantodosk",
    thumb: cantodosk,
    href: "https://instagram.com/cantodosk",
  },
  {
    name: "Aurora v4",
    thumb: aurora,
    href: "https://pabloalbrnz.github.io/Aurora-v4",
  },
];
