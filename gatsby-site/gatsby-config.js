module.exports = {
  siteMetadata: {
    title: `Photos`,
    description: `Photos, sorted by date.`,
    author: `@insidetheblock`,
    social: [
      {
        name: "Source",
        url: "https://github.com/scottrblock/photo-metadata",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/insidetheblock",
      },
      {
        name: "GitHub",
        url: "https://github.com/scottrblock",
      },
    ],
  },
  plugins: [
    `gatsby-theme-gallery`,
    {
      resolve: "gatsby-theme-gallery",
      options: {
        basePath: "/gallery",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
