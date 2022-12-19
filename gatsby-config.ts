export default {
  plugins: [
    'gatsby-plugin-tsconfig-paths',
    {
      options: {
        jsxPragma: 'React',
      },
      resolve: 'gatsby-plugin-typescript',
    },
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sharp',
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
        name: 'Untitled Gatsby project',
        short_name: 'foo',
        start_url: '/',
        theme_color: '#663399', // TODO: set these up 👆
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Gatsby TS starter with Styled Components + ESLint',
    title: 'Gatsby boilerplate',
  },
};

export { };
