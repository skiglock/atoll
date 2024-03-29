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
        allProducts {
          edges {
            node {
              id
              path
            }
          }
        }
        allCasesPost {
          edges {
            node {
              id
              path
            }
          }
        }
        allPages {
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
      const newPath = node.path.replace('/content', '').slice(0, -1)
      createPage({
        path: newPath,
        component: './src/templates/BlogPost.vue',
        context: {
          id: node.id
        }
      })
    })

    data.allProducts.edges.forEach(({ node }) => {
      const newPath = node.path.replace('/content', '').slice(0, -1)
      createPage({
        path: newPath,
        component: './src/templates/Products.vue',
        context: {
          id: node.id
        }
      })
    })

    data.allCasesPost.edges.forEach(({ node }) => {
      const newPath = node.path.replace('/content', '').slice(0, -1)
      createPage({
        path: newPath,
        component: './src/templates/CasesPost.vue',
        context: {
          id: node.id
        }
      })
    })
    data.allPages.edges.forEach(({ node }) => {
      const newPath = node.path.replace('/content/pages', '').slice(0, -1)
      createPage({
        path: newPath,
        component: './src/templates/Page.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
