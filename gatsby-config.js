const config = require('./site-config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteLang: config.siteLang,
    metaTags: config.metaTags,
    linkTags: config.linkTags,
    facebook: config.facebook,
    twitter: config.twitter
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        ssr: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
