const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_variables.scss'),
        path.resolve(__dirname, './src/assets/scss/_reset.scss'),
        path.resolve(__dirname, './src/assets/scss/_global.scss')
      ]
    })
}

module.exports = {
  siteName: 'Atollon',
  templates: {
    Index: '/',
    About: '/about',
    Blog: '/blog',
    // BlogPost: '/blog/:title',
    Contacts: '/contacts',
    Cases: '/cases'
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: []
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/home.md',
        typeName: 'Index',
        remark: {
          plugins: []
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/about.md',
        typeName: 'About',
        remark: {
          plugins: []
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/pages/*.md',
        typeName: 'Dynamic',
        remark: {
          plugins: []
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog.md',
        typeName: 'Blog',
        remark: {
          plugins: []
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/*.md',
        typeName: 'BlogPost',
        remark: {
          plugins: []
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/contacts.md',
        typeName: 'Contacts',
        remark: {
          plugins: []
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/cases.md',
        typeName: 'Cases',
        remark: {
          plugins: []
        }
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
        modulePath: 'src/admin/index.js'
      }
    }
  ],
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
