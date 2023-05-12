import "../stylecss/css/style.css";

export default function Accueil({ accueilOpen }) {
  return accueilOpen && <div className="accueil__conteneur"></div>;
}
