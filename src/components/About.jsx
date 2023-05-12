import "../stylecss/css/style.css";
import Philippe from "../assets/imgphilippe.webp";
import Cv from "../assets/CV_Philippe_JAYMES.pdf";

export default function Contact({ aboutOpen }) {
  return (
    aboutOpen && (
      <section className="conteneurabout">
        <div className="conteneurabout__div">
          <div>
            <h2 className="conteneurabout__titre">Ma présentation:</h2>
            <p className="conteneurabout__paragraphe">
              Engagé volontaire de l'Armée de Terre pendant cinq ans puis
              exerçant dix ans dans le secteur de la sécurité, &#128073; j'ai
              réalisé une reconversion professionnelle et entrepris une
              formation auprès de l'organisme OpenClassrooms &#9996;, obtenant
              en ce début d'année 2023 le diplôme de &#10024;Développeur web
              full stack&#10024;.
            </p>
            <p className="conteneurabout__paragraphe">
              Ce que j’aime dans le métier de développeur web &#128187;, pouvoir
              réaliser un site web responsive de A à Z aux normes W3C et WCAG,
              aussi bien dans la conception d'une page HTML5 en utilisant les
              balises sémantiques que de pouvoir styliser, créer de superbes
              animations grâce au CSS3 et d'utiliser le préprocesseur Sass
              &#128076;. Dynamiser un site avec le Javascript &#128170;, en
              communiquant avec les API Flech pour gagner en rapidité, surtout
              dans le monde d'aujourd'hui où l'information recherchée doit être
              disponible quasi instantanément. Utiliser le framework React qui
              est l’un des frameworks JavaScript les plus vogues pour créer des
              composants réutilisables et construire le DOM d'une application
              web &#128526; ainsi que de concevoir la programmation d'un serveur
              Node.js relié à la base de données MongoDB&#128525;.
            </p>
            <p className="conteneurabout__paragraphe">
              En raison de mon parcours professionnel atypique, j'affectionne de
              me former à de nouveaux langages et d'accomplir une veille
              informationnelle dans le domaine de l'informatique. J'ai le goût
              de la rigueur, du travailler bien fait et du management d'une
              équipe&#128522;.
            </p>
            <p>
              Mon curriculum vitae est téléchargeable en cliquant sur le lien
              suivant: <a href={Cv}> ici</a>
            </p>
          </div>
          <img
            src={Philippe}
            alt="Portrait de Philippe JAYMES"
            className="conteneurabout__img"
          />
        </div>
      </section>
    )
  );
}
