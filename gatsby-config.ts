// import path from 'path';

// const gatsbyRequiredRules = path.join(
//   process.cwd(),
//   'node_modules',
//   'gatsby',
//   'dist',
//   'utils',
//   'eslint-rules'
// );

export default {
  plugins: [
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-typescript',
    // {
    //   exclude: [
    //     'node_modules',
    //     '.cache',
    //     'public',
    //   ],
    //   options: {
    //     extensions: ['ts', 'tsx'],
    //     // rulePaths: [gatsbyRequiredRules],
    //     stages: ['develop'],
    //   },
    //   resolve: 'gatsby-plugin-eslint',
    // },
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
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
