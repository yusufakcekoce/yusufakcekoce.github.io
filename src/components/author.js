import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Author = () => {
    const data = useStaticQuery(graphql`
      query AuthorQuery {
        site {
            siteMetadata {
              author {
                name
                summary
              }
              social {
                medium
              }
            }
          }
      }
    `)

    const author = data.site.siteMetadata?.author
    const social = data.site.siteMetadata?.social

    return (
        <div className="author">
            <StaticImage
                className="author-avatar"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/profile-pic.png"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
            />
            {author?.name && (
                <p>
                    Written by <strong>{author.name}</strong> {author?.summary || null}
                    {` `}
                    <a href={`https://medium.com/${social?.medium || ``}`}>
                        You should follow them on Medium
            </a>
                </p>
            )}
        </div>
    )
}

export default Author