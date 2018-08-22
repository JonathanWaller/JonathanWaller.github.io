module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,600`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    }
  ],
  siteMetadata: {
    title: "Jonathan Waller",
    description: "Full Stack Web Developer",
    keywords: "full stack, web developer, portfolio, personal website",
    url: "https://www.praagya.com"
  }
};
