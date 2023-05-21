import "../stylecss/css/style.css";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Banner({ sidebarOpen, updateSidebar }) {
  function selected(e) {
    updateSidebar(!sidebarOpen);

    const styleClass = e.target;

    if (!styleClass.classList.contains("active")) {
      styleClass.classList.add("active");
    } else {
      styleClass.classList.remove("active");
    }

    setTimeout(() => {
      const styleClassAccueil =
        e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
          .childNodes[0].childNodes[0].childNodes[0].childNodes[0]
          .childNodes[0];
      if (
        window.matchMedia("(min-width: 768px)").matches &&
        sidebarOpen === false
      ) {
        const stlyleArrowAccueil =
          e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[0]
            .childNodes[0].childNodes[1];
        stlyleArrowAccueil.classList.add("rotate");
        styleClassAccueil.classList.add("button");
      } else if (
        window.matchMedia("(max-width: 768px)").matches &&
        sidebarOpen === false
      ) {
        const stlyleArrowPortfolio =
          e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[1]
            .childNodes[0].childNodes[1];
        const stlyleArrowApropos =
          e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[2]
            .childNodes[0].childNodes[1];
        const stlyleArrowContact =
          e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[3]
            .childNodes[0].childNodes[1];
        stlyleArrowPortfolio.classList.add("rotateinit");
        stlyleArrowApropos.classList.add("rotateinit");
        stlyleArrowContact.classList.add("rotateinit");
        styleClassAccueil.classList.add("button");
      }
    }, 10);
  }

  return (
    <header>
      <section className="banner">
        <h1 className="banner__titre">Philippe JAYMES - Portfolio</h1>
        <Button className="banner--button" onClick={(e) => selected(e)}>
          <RxHamburgerMenu className="banner--button__icone" />
        </Button>
      </section>
    </header>
  );
}
