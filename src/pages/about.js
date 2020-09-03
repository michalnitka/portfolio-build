import React from "react"
import Layout from "../components/templates/Layout"
import HeroImage from "../components/atoms/HeroImage"
import CTA from "../components/atoms/CTA"

const about = () => {
  return (
    <Layout>
      <section className="about-wrapper">
        <HeroImage />
        <div className="info">
          <p>Cześć, nazywam się Michał Nitka</p>
          <p>
            Szukam swojej pierwszej pracy jako Front end Developer. Jestem osobą
            która szybko przyswaja wiedzę, bardzo dobrze pracuje w zespole,
            potrafię rozmawiać z klientem oraz dobrze gram w Fife.
          </p>
          <p>
            Trudno jest znaleźć wśród moich byłych pracodawców przedstawicieli
            branży IT. Jednak pozwolili mi oni na rozwój w innych dziedzinach.
            Pracowałem jako koordynator zespołu w Multikinie, administrator
            magazynu w ID Logistics oraz jako monter instalacji
            telekomunikacyjnych i konstrukcji dla sieci PLAY.
          </p>

          <p>
            Jeśli szukasz osoby, która dostarczy pozytywnej energii do zespołu.
            Nie udaje, że wie wszystko, jednak zna swoje swoje słabości i stara
            się szybko je nadrobić. Jest doświadczony w pracy z klientem, proszę
            skontaktuj się ze mną.
          </p>
          <CTA direction="/contact" styledClass="primary">
            Contact
          </CTA>
        </div>
      </section>
    </Layout>
  )
}

export default about
