import React from "react"
import HeroImage from "../atoms/HeroImage"
import ButtonCTA from "../atoms/CTA"
import SocialLinks from "../atoms/SocialLinks"
import { Link } from "react-scroll"

const HeroSection = ({ styleClass }) => {
  return (
    <section className={`${styleClass ? styleClass : ""}`}>
      <HeroImage />
      <aside className="hero-info">
        <h2>Cześć, nazywam się Michał Nitka</h2>
        <p>Jestem frontend developerem</p>
        <p>
          Mam nadzieję, że moje projekty przypadną Ci do gustu{" "}
          <span role="img" aria-label="winking face emoji">
            😉
          </span>
        </p>
        <div className="buttons-conteiner">
          <ButtonCTA direction="/contact" styledClass="secondary">
            {" "}
            Kontakt
          </ButtonCTA>

          <Link className="btn primary" to="works" spy={true} smooth={true}>
            Moje prace
          </Link>
        </div>
        <SocialLinks styleClass="hero-links" />
      </aside>
    </section>
  )
}

export default HeroSection
