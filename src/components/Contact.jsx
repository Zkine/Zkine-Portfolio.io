import "../stylecss/css/style.css";
import { useState } from "react";
import { regExpNomPrenom, regExpEmail, regExpDescription } from "../datas/data";
import Button from "./Button";

export default function Contact({ contactOpen }) {
  const [nom, setNom] = useState("");
  const [isNomError, setNomError] = useState(false);
  const [premon, setPremon] = useState("");
  const [isPremonError, setPremonError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setEmailError] = useState(false);
  const [description, setDescription] = useState("");
  const [isDescriptionError, setDescriptionError] = useState(false);

  const validate = (e) => {
    if (!regExpNomPrenom.test(nom)) {
      e.preventDefault();
      setNomError(true);
    } else if (regExpNomPrenom.test(nom)) {
      setNomError(false);
    }

    if (!regExpNomPrenom.test(premon)) {
      e.preventDefault();
      setPremonError(true);
    } else if (regExpNomPrenom.test(premon)) {
      setPremonError(false);
    }

    if (!regExpEmail.test(email)) {
      e.preventDefault();
      setEmailError(true);
    } else if (regExpEmail.test(email)) {
      setEmailError(false);
    }

    if (!regExpDescription.test(description)) {
      e.preventDefault();
      setDescriptionError(true);
    } else if (regExpDescription.test(description)) {
      setDescriptionError(false);
    } else {
      alert("Votre message a bien été envoyé");
    }
  };

  function handleBlurNom(e) {
    const inputColorNom = e.target.form[0];
    if (
      !regExpNomPrenom.test(nom) &&
      !inputColorNom.classList.contains("invalid")
    ) {
      inputColorNom.classList.add("invalid");
    } else if (
      regExpNomPrenom.test(nom) &&
      inputColorNom.classList.contains("invalid")
    ) {
      inputColorNom.classList.remove("invalid");
    }
  }

  function handleBlurPrenom(e) {
    const inputColorPrenom = e.target.form[1];
    if (
      !regExpNomPrenom.test(premon) &&
      !inputColorPrenom.classList.contains("invalid")
    ) {
      inputColorPrenom.classList.add("invalid");
    } else if (
      regExpNomPrenom.test(premon) &&
      inputColorPrenom.classList.contains("invalid")
    ) {
      inputColorPrenom.classList.remove("invalid");
    }
  }

  function handleBlurMail(e) {
    const inputColorMail = e.target.form[2];
    if (
      !regExpEmail.test(email) &&
      !inputColorMail.classList.contains("invalid")
    ) {
      inputColorMail.classList.add("invalid");
    } else if (
      regExpEmail.test(email) &&
      inputColorMail.classList.contains("invalid")
    ) {
      inputColorMail.classList.remove("invalid");
    }
  }

  function handleBlurDescription(e) {
    const inputColorDescription = e.target.form[3];
    if (
      !regExpDescription.test(description) &&
      !inputColorDescription.classList.contains("invalid")
    ) {
      inputColorDescription.classList.add("invalid");
    } else if (
      regExpDescription.test(description) &&
      inputColorDescription.classList.contains("invalid")
    ) {
      inputColorDescription.classList.remove("invalid");
    }
  }

  return (
    contactOpen && (
      <section className="conteneurcontact">
        <div className="conteneurcontact__div">
          <h2 className="conteneurcontact__h2">Me contacter</h2>
          <form
            method="POST"
            action="http://localhost:3030/api/message"
            className="conteneurcontact__form"
          >
            <p className="conteneurcontact__formulaire">
              <label htmlFor="nom" className="conteneurcontact__label">
                Nom :
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  className="conteneurcontact__nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  onBlur={handleBlurNom}
                  required
                />
                {isNomError && (
                  <span>
                    🔥 votre nom ne doit pas comporter de numéros ou de
                    caractères spéciaux.
                  </span>
                )}
              </label>
              <label htmlFor="prenom" className="conteneurcontact__label">
                Prénom :
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  className="conteneurcontact__prenom"
                  value={premon}
                  onChange={(e) => setPremon(e.target.value)}
                  onBlur={handleBlurPrenom}
                  required
                />
                {isPremonError && (
                  <span>
                    🔥 votre prénom ne doit pas comporter de numéros ou de
                    caractères spéciaux.
                  </span>
                )}
              </label>
              <label htmlFor="email" className="conteneurcontact__label">
                Email :
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="conteneurcontact__mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlurMail}
                  required
                />
                {isEmailError && (
                  <span>🔥 Veuillez entrer une adresse mail valide.</span>
                )}
              </label>
              <br />
              <label htmlFor="descriptif" className="conteneurcontact__label">
                Descriptif de votre demande (Ajoutez autant de détails que
                nécessaire):
                <textarea
                  name="descriptif"
                  id="descriptif"
                  className="conteneurcontact__descriptif"
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={handleBlurDescription}
                  required
                ></textarea>
                {isDescriptionError && (
                  <span>🔥 Veuillez entrer un minimum dans 65 caractères.</span>
                )}
              </label>
              <Button
                type="submit"
                onClick={validate}
                className="conteneurcontact--bouton"
              >
                Envoyer
              </Button>
            </p>
          </form>
        </div>
      </section>
    )
  );
}
