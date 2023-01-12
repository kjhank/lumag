export default {
  flags: {
    DEV_SSR: false,
  },
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
      // options: {
      //   rule: {
      //     include: /\/src\/static/,
      //   },
      // },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.svg',
        name: 'Untitled Gatsby project',
        short_name: 'foo',
        start_url: '/',
        theme_color: '#663399', // TODO: set these up 👆
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Gatsby TS starter with Styled Components + ESLint',
    title: 'Gatsby boilerplate',
  },
};

export { };
