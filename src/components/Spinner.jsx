import imgAccueil from "../assets/posteDeTravailLoader.webp";
import "../stylecss/css/style.css";

export default function Spinner() {
  return (
    <div className="loading_spinner">
      <div className="loading_spinner__conteneur">
        <div className="loading_spinner__rideau1"></div>
        <div className="loading_spinner__rideau2"></div>
        <div className="loading_spinner__rideau3"></div>
        <div className="loading_spinner__rideau4"></div>
        <div className="loading_spinner__rideau5"></div>
        <div className="loading_spinner__animationtitre">
          <span className="loading_spinner__titre">
            Philippe JAYMES - Développeur web
          </span>
          <img
            src={imgAccueil}
            alt="Labtop Accueil"
            className="loading_spinner__img"
          />
          <div className="loading_spinner__conteneurchargement">
            <span className="loading_spinner--lettre">C</span>
            <span className="loading_spinner--lettre">h</span>
            <span className="loading_spinner--lettre">a</span>
            <span className="loading_spinner--lettre">r</span>
            <span className="loading_spinner--lettre">g</span>
            <span className="loading_spinner--lettre">e</span>
            <span className="loading_spinner--lettre">m</span>
            <span className="loading_spinner--lettre">e</span>
            <span className="loading_spinner--lettre">n</span>
            <span className="loading_spinner--lettre">t</span>
            <span className="loading_spinner--lettre">d</span>
            <span className="loading_spinner--lettre">e</span>
            <span className="loading_spinner--lettre">l</span>
            <span className="loading_spinner--lettre">a</span>
            <span className="loading_spinner--lettre">p</span>
            <span className="loading_spinner--lettre">a</span>
            <span className="loading_spinner--lettre">g</span>
            <span className="loading_spinner--lettre">e</span>
          </div>
        </div>
      </div>
    </div>
  );
}
