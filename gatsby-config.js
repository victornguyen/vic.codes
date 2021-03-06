const mdxFeed = require('gatsby-plugin-mdx/feed')

module.exports = {
  siteMetadata: {
    title: `Victor Nguyen`,
    author: `Victor Nguyen`,
    job: `Frontend Developer`,
    description: `It's another blog made by another frontend developer on the Internet.`,
    siteUrl: `https://vic.codes/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/copy`,
        name: `copy`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: `gatsby-remark-acronyms`,
            options: {
              acronyms: {
                IRL: `in real life`,
                RPG: `role playing game`,
                OP: `overpowered`,
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Victor Nguyen | Frontend Developer`,
        short_name: `Vic`,
        start_url: `/`,
        background_color: `#FF69B4`,
        theme_color: `#FFD700`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://vic.codes`,
        noQueryString: true,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
