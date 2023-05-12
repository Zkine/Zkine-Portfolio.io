import "../stylecss/css/style.css";
import Button from "./Button";

export default function Banner({ sidebarOpen, updateSidebar }) {
  function selected(e) {
    updateSidebar(!sidebarOpen);

    const styleClass = e.target;

    setTimeout(() => {
      if (
        window.matchMedia("(min-width: 768px)").matches &&
        sidebarOpen === false
      ) {
        const stlylebuttonaccueil =
          e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[0]
            .childNodes[0].childNodes[1];
        stlylebuttonaccueil.classList.add("rotate");
      } else if (
        window.matchMedia("(max-width: 768px)").matches &&
        sidebarOpen === false
      ) {
        const stlylebuttonportfolio =
          e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[1]
            .childNodes[0].childNodes[1];
        const stlylebuttonapropos =
          e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[2]
            .childNodes[0].childNodes[1];
        const stlylebuttoncontact =
          e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[3]
            .childNodes[0].childNodes[1];
        stlylebuttonportfolio.classList.add("rotateinit");
        stlylebuttonapropos.classList.add("rotateinit");
        stlylebuttoncontact.classList.add("rotateinit");
      }
    }, 0);

    if (!styleClass.classList.contains("active")) {
      styleClass.classList.add("active");
    } else {
      styleClass.classList.remove("active");
    }
  }

  return (
    <header>
      <section className="banner">
        <h1 className="banner__titre">Philippe JAYMES - Portfolio</h1>
        <Button className="banner--button" onClick={(e) => selected(e)}>
          Menu
        </Button>
      </section>
    </header>
  );
}
