import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="socialIcon" />,
    url: "https://www.linkedin.com/in/michal-nitka1991/",
  },
  {
    id: 2,
    icon: <FaGithub className="socialIcon" />,
    url: "https://github.com/michalnitka",
  },
]

const SocialLinks = data.map(link => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="socialLink"
        rel="noreferrer"
        target="_blank"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {SocialLinks}
    </ul>
  )
}
