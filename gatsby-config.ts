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
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        background_color: '#fabf3a',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.svg',
        name: 'Lumag 2022',
        short_name: 'lumag',
        start_url: '/',
        theme_color: '#fabf3a',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Lumag 2022',
    title: 'Lumag 2022',
  },
};

export { };
