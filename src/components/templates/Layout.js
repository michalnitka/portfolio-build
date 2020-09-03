import React from "react"
import NavBar from "../organisms/NavBar"
import Footer from "../organisms/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
