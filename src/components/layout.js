import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"

import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { TiAdjustContrast } from 'react-icons/ti'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className="dark-button">
              <TiAdjustContrast
                onClick={() => theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')}
              />
            </div>
          )}
        </ThemeToggler>
      </div>
    )
  } else {
    header = (
      <div>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className="dark-button">
              <TiAdjustContrast
                onClick={() => theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')}
              />
            </div>
          )}
        </ThemeToggler>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
