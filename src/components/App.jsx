import React, { Fragment } from "react";
import Normalize from "react-normalize";
import "../stylecss/css/style.css";
import Spinner from "./Spinner";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import Accueil from "./Accueil";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import { useState, useEffect } from "react";

export default function App() {
  const [sidebarOpen, updateSidebar] = useState(false);
  const [accueilOpen, updateAccueil] = useState(true);
  const [portfolioOpen, updatePortefolio] = useState(false);
  const [aboutOpen, updateAbout] = useState(false);
  const [contactOpen, updateContact] = useState(false);

  useEffect(() => {
    if (accueilOpen === true) {
      document.title = "Page Accueil - Portfolio Philippe JAYMES ";
    } else if (portfolioOpen === true) {
      document.title = "Page Portfolio - Portfolio Philippe JAYMES ";
    } else if (aboutOpen === true) {
      document.title = "Page À propos - Portfolio Philippe JAYMES ";
    } else if (contactOpen === true) {
      document.title = "Page Contact - Portfolio Philippe JAYMES ";
    }
  });

  return (
    <>
      <Normalize />
      <Spinner />
      <Banner sidebarOpen={sidebarOpen} updateSidebar={updateSidebar} />
      <main className="main">
        <article className="main__conteneur">
          <Sidebar
            sidebarOpen={sidebarOpen}
            updateAccueil={updateAccueil}
            updatePortefolio={updatePortefolio}
            updateAbout={updateAbout}
            updateContact={updateContact}
          />
          <Accueil accueilOpen={accueilOpen} />
          <Portfolio portfolioOpen={portfolioOpen} />
          <About aboutOpen={aboutOpen} />
          <Contact contactOpen={contactOpen} />
        </article>
      </main>
    </>
  );
}
