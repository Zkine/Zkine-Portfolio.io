import "../stylecss/css/style.css";
import { useEffect, useState } from "react";
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
  const [clickButtonSidebar, setclickButtonSidebar] = useState("1bu");
  useEffect(() => {
    if (sidebarOpen === false) {
      setclickButtonSidebar("1bu");
      updateAccueil(true);
      updatePortefolio(false);
      updateAbout(false);
      updateContact(false);
    }
  }, [
    sidebarOpen,
    updateAbout,
    updateAccueil,
    updateContact,
    updatePortefolio,
  ]);

  function selectedAccueil(id) {
    console.log("render");
    setclickButtonSidebar(id);
    switch (id) {
      case "1bu":
        updateAccueil(true);
        updatePortefolio(false);
        updateAbout(false);
        updateContact(false);
        break;
      case "2bu":
        updateAccueil(false);
        updatePortefolio(true);
        updateAbout(false);
        updateContact(false);
        break;
      case "3bu":
        updatePortefolio(false);
        updateAccueil(false);
        updateAbout(true);
        updateContact(false);
        break;
      case "4bu":
        updateAccueil(false);
        updatePortefolio(false);
        updateAbout(false);
        updateContact(true);
        break;
      default:
        console.log("Button sans state");
    }
  }

  return (
    sidebarOpen && (
      <aside className="sidebar_conteneur">
        <nav>
          <menu className="sidebar_conteneur__menu">
            {buttonlist.map(({ id, name }) => (
              <li className="sidebar_conteneur__li" key={id}>
                <Button
                  id={id}
                  className={[
                    id === clickButtonSidebar
                      ? "button"
                      : "sidebar_conteneur--button",
                  ]}
                  onClick={() => {
                    selectedAccueil(id);
                  }}
                >
                  {name}
                  <AiFillCaretDown
                    className={[
                      id === clickButtonSidebar ? "rotate" : "rotateinit",
                    ]}
                  />
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
