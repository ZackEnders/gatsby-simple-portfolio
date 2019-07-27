const config = require("./site-config");


 console.log("process.env.NODE_ENV ", process.env.NODE_ENV);

module.exports = {
    siteMetadata: {
        title: config.siteTitle,
        siteLang: config.siteLang,
        siteUrl: config.siteUrl,
        metaTags: config.metaTags,
        linkTags: config.linkTags,
        facebook: config.facebook,
        twitter: config.twitter,
    },
    plugins: [
        `gatsby-transformer-json`,
        `gatsby-plugin-sitemap`,
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
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: config.siteUrl,
                sitemap: config.siteUrl + '/sitemap.xml',
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }]
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }]
                    }
                }
            }
        }
    ],
}
