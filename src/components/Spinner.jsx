import Philippe from "../assets/imgphilippe.webp";
import "../stylecss/css/style.css";

export default function Spinner() {
  return (
    <div className="loading_spinner">
      <h1 className="loading_spinner__titre">
        Bienvenue sur <br className="loading_spinner__br" /> mon portfolio !
      </h1>
      <img
        src={Philippe}
        alt="Portrait de Philippe JAYMES"
        className="loading_spinner__img"
      />
    </div>
  );
}
