import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <Img fluid={data.file.childImageSharp} />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "assets/images/pic01.jpg" }) {
      childImageSharp {
        fluid(maxWidth:2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`
