import React from "react"
import Layout from "../components/templates/Layout"

const Contact = () => {
  return (
    <Layout>
      {
        <section className="contact-form-section">
          <h1>Skontaktuj się ze mną</h1>

          <form
            className="contact-form"
            aria-label="Contact form"
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="email" id="email">
              Email
              <input type="email" name="email" id="email" required />
            </label>

            <label htmlFor="name">
              Imię
              <input type="text" name="name" id="name" />
            </label>

            <label htmlFor="message">
              Wiadomość
              <textarea
                type="text"
                name="message"
                id="message"
                cols="30"
                rows="5"
                required
              />
            </label>

            <button type="submit" className="btn primary">
              Wyślij
            </button>
          </form>
        </section>
      }
    </Layout>
  )
}

export default Contact
