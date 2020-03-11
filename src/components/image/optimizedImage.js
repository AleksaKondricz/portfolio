import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const imageQuery = graphql`
  query {
    images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|webp/" } }) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const OptImage = ({ imageKey, ...rest }) => (
  <StaticQuery
    query={imageQuery}
    render={data => {
      const selectedImage = data.images.edges.find(
        img => img.node.relativePath === imageKey
      )

      return <Img fluid={selectedImage.node.childImageSharp.fluid} {...rest} />
    }}
  />
)

OptImage.propTypes = {
  imageKey: PropTypes.node.isRequired
}
export default OptImage