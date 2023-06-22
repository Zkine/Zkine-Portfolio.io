import "../stylecss/css/style.css";
import "./Sidebar.jsx";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Banner({ sidebarOpen, updateSidebar }) {
  const [clickBanner, setclickBanner] = useState(false);

  function selected(element) {
    let pressed = element.currentTarget.getAttribute("aria-pressed") === "true";
    element.currentTarget.setAttribute("aria-pressed", !pressed);
    setclickBanner(!clickBanner);
    updateSidebar(!sidebarOpen);
  }

  return (
    <header>
      <section className="banner">
        <h1 className="banner__titre">Philippe JAYMES - Portfolio</h1>
        <Button
          aria-haspopup="menu"
          aria-pressed="false"
          className={[clickBanner ? "active" : "banner--button"]}
          onClick={(e) => selected(e)}
        >
          <RxHamburgerMenu className="banner--button__icone" />
        </Button>
      </section>
    </header>
  );
}
