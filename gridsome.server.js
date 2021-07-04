module.exports = function (api) {
  api.loadSource(({ addCollection }) => {})

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allBlogPost {
          edges {
            node {
              id
              path
            }
          }
        }
      }
    `)

    data.allBlogPost.edges.forEach(({ node }) => {
      const newPath = node.path.replace('/content', '')
      createPage({
        path: newPath,
        component: './src/templates/BlogPost.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
