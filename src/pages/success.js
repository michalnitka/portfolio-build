import React from "react"
import Layout from "../components/templates/Layout"
import CTA from "../components/atoms/CTA"

const success = () => {
  return (
    <Layout>
      <section className="section-success">
        <h1>Dziękuje za wysłanie formularza</h1>
        <CTA direction="/" styledClass="primary">
          Strona główna
        </CTA>
      </section>
    </Layout>
  )
}

export default success
