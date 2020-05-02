import {graphql} from 'gatsby'

export const ImageFields = graphql`
  fragment ImageFields on File {
    publicURL
    id
    extension
    childImageSharp {
      fluid(maxWidth: 1100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
