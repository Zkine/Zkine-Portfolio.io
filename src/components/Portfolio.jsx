import "../stylecss/css/style.css";
import { portfoliolist } from "../datas/data";

export default function Portfolio({ portfolioOpen }) {
  return (
    portfolioOpen && (
      <section className="portfolio__conteneur">
        <div className="portfolio__conteneur__element">
          {portfoliolist.map((portfolio) => (
            <div className="portfolio__conteneur__section" key={portfolio.id}>
              <a rel="noreferrer" href={portfolio.href} target="_blank">
                <figure className="portfolio__conteneur__figure">
                  <img
                    loading="lazy"
                    src={portfolio.src}
                    alt={portfolio.alt}
                    className="portfolio__conteneur__img"
                  />
                </figure>
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  );
}
