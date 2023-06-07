import "../stylecss/css/style.css";
import "./Sidebar.jsx";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Banner({ sidebarOpen, updateSidebar }) {
  const [clickBanner, setclickBanner] = useState(false);

  function selected() {
    setclickBanner(!clickBanner);
    updateSidebar(!sidebarOpen);
  }

  return (
    <header>
      <section className="banner">
        <h1 className="banner__titre">Philippe JAYMES - Portfolio</h1>
        <Button
          className={[clickBanner ? "active" : "banner--button"]}
          onClick={(e) => selected(e)}
        >
          <RxHamburgerMenu className="banner--button__icone" />
        </Button>
      </section>
    </header>
  );
}
