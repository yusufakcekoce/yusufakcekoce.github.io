import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query IconQuery {
      site {
        siteMetadata {
          social {
            twitter,
            github,
            linkedin
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  return (
    <footer>
      <div className="footer-links">
        <Link to={`/blog/`}>Blog</Link>
        <Link to={`/about/`}>About</Link>
        <Link to={`/contact/`}>Contact</Link>
      </div>
      <div className="icons">
        <a target="blank" href={`https://github.com/${social?.github || ``}`}>
          <FiGithub>GitHub</FiGithub>
        </a>
        <a target="blank" href={`https://twitter.com/${social?.twitter || ``}`}>
          <FiTwitter>Twitter</FiTwitter>
        </a>
        <a target="blank" href={`https://linkedin.com/in/${social?.linkedin || ``}`}>
          <FiLinkedin>LinkedIn</FiLinkedin>
        </a>
      </div>
    </footer>
  )
}

export default Footer