import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import './bio.css'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <div className="bio_column bio_left">
        {author?.name && (
          <>
            <h1>Hello, my name's <strong>{author.name}</strong></h1>
            <h4>{author.summary}</h4>
            <p>
              I enjoy learning new things, researching and creating new things.
              I love contributing and developing open source projects. I try to convey what I have learned verbally or in writing.
            </p>
          </>
        )}
      </div>
      <div className="bio_column bio_rigth">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../../images/profile-pic.png"
          width={200}
          height={200}
          quality={95}
          alt="Profile picture"
        />
      </div>
    </div>
  )
}

export default Bio
