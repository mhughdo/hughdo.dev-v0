const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const blogPost = path.resolve(`./src/templates/post.js`)
  const result = await graphql(
    `
      {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {collection: {eq: "post"}}}) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === `Mdx`) {
    const generatedSlug = createFilePath({node, getNode})

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug ? `/${node.frontmatter.slug}/` : generatedSlug,
    })

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}
