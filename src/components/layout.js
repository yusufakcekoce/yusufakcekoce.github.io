import * as React from "react"
import { Link } from "gatsby"

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
        <h3>
          <Link to={`/about/`}>About</Link>
        </h3>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <a href="https://github.com/kayraberktuncer">Github</a>
        {` `}
        <a href="https://twitter.com/home">Twitter</a>
        {` `}
        <a href="https://www.linkedin.com/in/kayraberktuncer/">LinkedIn</a>
      </footer>
    </div>
  )
}

export default Layout
