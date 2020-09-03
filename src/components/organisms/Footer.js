import React from "react"
import SocialLinks from "../atoms/SocialLinks"

const Footer = () => {
  return (
    <footer aria-label="footer">
      <h4>Michał Nitka &copy;{new Date().getFullYear()}</h4>
      <SocialLinks />
    </footer>
  )
}

export default Footer
