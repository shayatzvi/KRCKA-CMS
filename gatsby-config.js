module.exports = {
  siteMetadata: {
    title: 'KRCKA Site',
    siteUrl: 'https://your-site-url.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
  ],
};
