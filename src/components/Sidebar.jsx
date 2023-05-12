import "../stylecss/css/style.css";
import { useEffect } from "react";
import Button from "./Button";
import { buttonlist, reseaulist } from "../datas/data";
import { AiFillCaretDown } from "react-icons/ai";

export default function Sidebar({
  sidebarOpen,
  updateAccueil,
  updatePortefolio,
  updateAbout,
  updateContact,
}) {
  useEffect(() => {
    if (sidebarOpen === false) {
      updateAccueil(true);
      updatePortefolio(false);
      updateAbout(false);
      updateContact(false);
    }
  });

  function selectedAccueil(e) {
    const addclick = e.target.childNodes[0].data;

    const arrowaccueil =
      e.target.parentNode.parentNode.children[0].childNodes[0].childNodes[1];
    const arrowportefolio =
      e.target.parentNode.parentNode.children[1].childNodes[0].childNodes[1];
    const arrowabout =
      e.target.parentNode.parentNode.children[2].childNodes[0].childNodes[1];
    const arrowcontact =
      e.target.parentNode.parentNode.children[3].childNodes[0].childNodes[1];

    if (!arrowaccueil.classList.contains("rotate") && addclick === "Accueil") {
      arrowaccueil.classList.remove("rotateinit");
      arrowaccueil.classList.add("rotate");
      arrowportefolio.classList.remove("rotate");
      arrowabout.classList.remove("rotate");
      arrowcontact.classList.remove("rotate");
      arrowportefolio.classList.add("rotateinit");
      arrowabout.classList.add("rotateinit");
      arrowcontact.classList.add("rotateinit");
      updateAccueil(true);
      updatePortefolio(false);
      updateAbout(false);
      updateContact(false);
    } else if (
      !arrowportefolio.classList.contains("rotate") &&
      addclick === "Portfolio"
    ) {
      arrowportefolio.classList.remove("rotateinit");
      arrowportefolio.classList.add("rotate");
      arrowabout.classList.remove("rotate");
      arrowcontact.classList.remove("rotate");
      arrowaccueil.classList.remove("rotate");
      arrowabout.classList.add("rotateinit");
      arrowcontact.classList.add("rotateinit");
      arrowaccueil.classList.add("rotateinit");
      updateAccueil(false);
      updatePortefolio(true);
      updateAbout(false);
      updateContact(false);
    } else if (
      !arrowabout.classList.contains("rotate") &&
      addclick === "À propos"
    ) {
      arrowabout.classList.remove("rotateinit");
      arrowabout.classList.add("rotate");
      arrowportefolio.classList.remove("rotate");
      arrowcontact.classList.remove("rotate");
      arrowaccueil.classList.remove("rotate");
      arrowportefolio.classList.add("rotateinit");
      arrowcontact.classList.add("rotateinit");
      arrowaccueil.classList.add("rotateinit");
      updatePortefolio(false);
      updateAccueil(false);
      updateAbout(true);
      updateContact(false);
    } else if (
      !arrowcontact.classList.contains("rotate") &&
      addclick === "Contact"
    ) {
      arrowcontact.classList.remove("rotateinit");
      arrowcontact.classList.add("rotate");
      arrowportefolio.classList.remove("rotate");
      arrowabout.classList.remove("rotate");
      arrowaccueil.classList.remove("rotate");
      arrowportefolio.classList.add("rotateinit");
      arrowabout.classList.add("rotateinit");
      arrowaccueil.classList.add("rotateinit");
      updateAccueil(false);
      updatePortefolio(false);
      updateAbout(false);
      updateContact(true);
    }
  }
  return (
    sidebarOpen && (
      <aside className="sidebar_conteneur">
        <nav>
          <menu className="sidebar_conteneur__menu">
            {buttonlist.map((button) => (
              <li className="sidebar_conteneur__li" key={button.id}>
                <Button
                  className="sidebar_conteneur--button"
                  onClick={(e) => selectedAccueil(e)}
                >
                  {button.name}
                  <AiFillCaretDown />
                </Button>
              </li>
            ))}
          </menu>
        </nav>
        <div className="sidebar_conteneur__icone">
          {reseaulist.map((reseau) => (
            <a
              key={reseau.id}
              rel={reseau.rel}
              className={reseau.classname}
              href={reseau.href}
              target={reseau.target}
            >
              {reseau.icon}
            </a>
          ))}
        </div>
      </aside>
    )
  );
}
