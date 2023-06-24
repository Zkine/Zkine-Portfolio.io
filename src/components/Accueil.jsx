import "../stylecss/css/style.css";
import accueilimg from "../assets/Accueilimg.webp";
import html from "../assets/HTML5.webp";
import css from "../assets/CSS3.webp";
import js from "../assets/JS.webp";
import nodejs from "../assets/NODEJS.webp";
import react from "../assets/REACTJS.webp";
import scss from "../assets/SASS.webp";

export default function Accueil({ accueilOpen }) {
  return (
    accueilOpen && (
      <div className="accueil__conteneur">
        <figure className="accueil__conteneur__figure">
          <div className="accueil__conteneur__ordi">
            <img
              fetchpriority="high"
              src={accueilimg}
              alt="ordinateur portable"
              className="accueil__conteneur__imgacc"
            />
          </div>
          <div className="accueil__conteneur__logo">
            <img
              src={html}
              alt="logo HTML5"
              className="accueil__conteneur__html5"
            />
            <img
              src={react}
              alt="logo react"
              className="accueil__conteneur__react"
            />
            <img
              src={css}
              alt="logo CSS3"
              className="accueil__conteneur__CSS3"
            />
            <img
              src={scss}
              alt="logo sass"
              className="accueil__conteneur__sass"
            />
            <img
              src={js}
              alt="logo javascript"
              className="accueil__conteneur__js"
            />
            <img
              src={nodejs}
              alt="logo NODEJS"
              className="accueil__conteneur__nodejs"
            />
          </div>
        </figure>
      </div>
    )
  );
}
