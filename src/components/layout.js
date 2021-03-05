import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"

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
        <h3 className="sub-heading">
          <Link to={`/about/`}>About</Link>
        </h3>
        <h3 className="sub-heading">
          <Link to={`/blog/`}>Blog</Link>
        </h3>
      </div>
    )
  } else {
    header = (
      <div>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <Link to={`/about/`} className="header-link-item">About</Link>
        <Link to={`/blog/`} className="header-link-item">Blog</Link>
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
