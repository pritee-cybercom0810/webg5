/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `CybercomWeb`,
    siteUrl: `http://192.168.0.204:1330/graphql`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zxx'
      },
      options: {
        apiKey: process.env.API_KEY,
      },
    },
  ],
}
