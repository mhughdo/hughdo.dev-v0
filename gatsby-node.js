const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

async function makeTips({graphql, actions}) {
  const {createPage} = actions
  const tipTemplate = path.resolve(`./src/templates/tip.js`)
  const result = await graphql(
    `
      {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {collection: {eq: "tip"}}}) {
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

  const tips = result.data.allMdx.edges

  tips.forEach((tip, index) => {
    const previous = index === tips.length - 1 ? null : tips[index + 1].node
    const next = index === 0 ? null : tips[index - 1].node

    createPage({
      path: `/tip${tip.node.fields.slug}`,
      component: tipTemplate,
      context: {
        slug: tip.node.fields.slug,
        pathPrefix: '/tip',
        previous,
        next,
      },
    })
  })
}

async function makePosts({graphql, actions}) {
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
      path: `/blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        pathPrefix: '/blog',
        previous,
        next,
      },
    })
  })
}

exports.createPages = async ({graphql, actions}) => {
  await Promise.all([makePosts({graphql, actions}), makeTips({graphql, actions})])
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
