const config = require('./site-config.json')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "",
  siteMetadata: {
    title: config.title || "Toby",
    titleTemplate: config.titleTemplate || "%s | Toby",
    description: config.description || "Toby is a starter to get you going using Gatsby v4 with DataoCMS",
    siteUrl: process.env.URL || "http://localhost:8000",
    twitterUsername: config.twitterUsername,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@src": "src",
          "@hooks": "src/hooks",
          "@components": "src/components",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@img": "src/img",
          "@posts": "content/posts",
        },
        extensions: [
          "js",
        ],
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: process.env.NODE_ENV === 'production' ? false : true 
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: (content, loaderContext) => {
          const theme = [
            `$primary: ${config.theme.colorsPrimary}`,
            `$light: ${config.theme.colorsLight}`,
            `$dark: ${config.theme.colorsDark}`,
            `$link: ${config.theme.colorsLink}`,
          ]
          return theme.join("\r\n").concat("\r\n").concat(content);
        },
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: false, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    //"gatsby-plugin-htaccess", // If host on own server
    //"gatsby-plugin-netlify", // If host on own Netilify
  ],
};
