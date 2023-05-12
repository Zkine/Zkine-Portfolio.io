// Importation des images pour la page Portfolio
import Brooky from "../assets/brooky.webp";
import Ohmyfood from "../assets/ohmyfood.webp";
import La_panthère from "../assets/la_panthère.webp";
import Kanap from "../assets/kanap.webp";
import La_piiquante from "../assets/la_piiquante.webp";
import Kasa from "../assets/kasa.webp";
// Importation des icons pour la page Sidebar
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

// Les regex qui permettent de valider les données inscrites par l'utilisateur page contact
export const regExpNomPrenom = new RegExp("^[a-zA-Z]{2,}$");
export const regExpEmail = new RegExp(
  "^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,4}$"
);
export const regExpDescription = new RegExp("^[a-zA-Z0-9.-_,:) ]{15,}$");

// Tableau objet qui incrémente la page Portfolio
export const portfoliolist = [
  {
    id: "1po",
    href: "https://zkine.github.io/Zkine_projet2_Brooky_04052022.github.io/",
    src: Brooky,
    alt: "Site la start-up Booky",
  },
  {
    id: "2po",
    href: "https://zkine.github.io/Zkine_projet3_Ohmyfood_05072022.github.io/",
    src: Ohmyfood,
    alt: "Site de la jeune startup OhMyFood",
  },
  {
    id: "3po",
    href: "https://zkine.github.io/Zkine_projet4_La_Panthere_noire_23082022.io/",
    src: La_panthère,
    alt: "Site de l'agence La Panthère de web design basée à Lyon",
  },
  {
    id: "4po",
    href: "https://github.com/Zkine/Zkine_projet5_Kanap_07092022.io",
    src: Kanap,
    alt: "Site de marque de canapés Kanap",
  },
  {
    id: "5po",
    href: "https://github.com/Zkine/Zkine_projet6_Piiquante_24102022.github.io",
    src: La_piiquante,
    alt: "Site de application web Piiquante",
  },
  {
    id: "6po",
    href: "https://github.com/Zkine/Zkine_projet7_Kasa_22112022.github.io",
    src: Kasa,
    alt: "La site location d’appartements Kasa",
  },
];

// Deux tableaux objets qui incrémentent la page Sidebar
export const buttonlist = [
  { id: "1bu", name: "Accueil" },
  { id: "2bu", name: "Portfolio" },
  { id: "3bu", name: "À propos" },
  { id: "4bu", name: "Contact" },
];

export const reseaulist = [
  {
    id: "1re",
    rel: "noreferrer",
    classname: "sidebar_conteneur__linkedin",
    href: "https://www.linkedin.com/in/philippe-jaymes/",
    target: "_blank",
    icon: <BsLinkedin />,
  },
  {
    id: "2re",
    rel: "noreferrer",
    classname: "sidebar_conteneur__github",
    href: "https://github.com/Zkine",
    target: "_blank",
    icon: <BsGithub />,
  },
];
