import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./bio.css"

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
            <h1>
              Hello, my name's <strong>{author.name}</strong>
            </h1>
            <h4>{author.summary}</h4>
            <p>
              I met coding when I was in high school. At Küçükyalı Vocational
              and Technical Anatolian High School where I studied When I was in
              the 2nd year, I chose the Web Design department. In this section I
              read for 3 years, HTML, CSS and learned basic level JS. Currently,
              2nd year Computer Programming at Erzurum-Atatürk University I am a
              student. I have been working hard to become a Front End Developer
              for about 5 months. Now have a high level of knowledge of HTML,
              CSS and intermediate JS, REACT I have a good level of English.
              HİRING CHALLENGS, which can be my reference in my Github profile,
              and I have projects that I personally do.
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
