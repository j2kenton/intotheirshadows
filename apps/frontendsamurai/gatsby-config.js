module.exports = {
  siteMetadata: {
    birthYear: 2022,
    title: `Into Their Shadows- Jewish Novel`,
    description: `Novel Homepage`,
    authorName: "Jonathan Kenton",
    authorTagline: "Author of Be a Man- Be Yourself",
    siteUrl: "http://intotheirshadows.com",
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'optimize-plugin',
      options: {
        minify: true,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frontend Samurai`,
        short_name: `Frontend Samurai`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
  ],
};
