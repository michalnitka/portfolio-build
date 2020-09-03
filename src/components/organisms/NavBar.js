import React from "react"
import Sidebar from "../molecules/Sidebar"
import Logo from "../atoms/Logo"
import NavLinks from "../atoms/NavLinks"
import NavButton from "../atoms/NavButton"

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="navBar" aria-label="Main">
      <div className="navCenter">
        <div className="navHeader">
          <Logo />
          <NavButton toggleSidebar={toggleSidebar} />
        </div>
        <NavLinks styleClass="navLinks" />
      </div>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
    </nav>
  )
}

export default NavBar
