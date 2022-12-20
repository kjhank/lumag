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
    {
      options: {
        fonts: {
          selfHosted: [
            {
              family: 'Avenir LT Std',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 900,
              urls: {
                woff: 'src/assets/fonts/subset-AvenirLTStd-Black.woff',
                woff2: 'src/assets/fonts/subset-AvenirLTStd-Black.woff2',
              },
            },
            {
              family: 'Helvetica',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 'bold',
              urls: {
                woff: 'src/assets/fonts/subset-Helvetica-Bold.woff',
                woff2: 'src/assets/fonts/subset-Helvetica-Bold.woff2',
              },
            },
            {
              family: 'Helvetica',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 'normal',
              urls: {
                woff: 'src/assets/fonts/subset-Helvetica.woff',
                woff2: 'src/assets/fonts/subset-Helvetica.woff2',
              },
            },
            {
              family: 'Helvetica',
              fontDisplay: 'swap',
              fontStyle: 'italic',
              fontWeight: 'normal',
              urls: {
                woff: 'src/assets/fonts/subset-Helvetica-Oblique.woff',
                woff2: 'src/assets/fonts/subset-Helvetica-Oblique.woff2',
              },
            },
            {
              family: 'Helvetica',
              fontDisplay: 'swap',
              fontStyle: 'italic',
              fontWeight: 900,
              urls: {
                woff: 'src/assets/fonts/subset-Helvetica-BoldOblique.woff',
                woff2: 'src/assets/fonts/subset-Helvetica-BoldOblique.woff2',
              },
            },
            {
              family: 'Lato',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 'normal',
              urls: {
                woff: 'src/assets/fonts/subset-Lato-Regular.woff',
                woff2: 'src/assets/fonts/subset-Lato-Regular.woff2',
              },
            },
            {
              family: 'Lato',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 900,
              urls: {
                woff: 'src/assets/fonts/subset-Lato-Black.woff',
                woff2: 'src/assets/fonts/subset-Lato-Black.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 500,
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-Medium.woff',
                woff2: 'src/assets/fonts/subset-Avenir-Medium.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'italic',
              fontWeight: 'normal',
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-Oblique.woff',
                woff2: 'src/assets/fonts/subset-Avenir-Oblique.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 'normal',
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-Roman.woff',
                woff2: 'src/assets/fonts/subset-Avenir-Roman.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 900,
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-Heavy.woff',
                woff2: 'src/assets/fonts/subset-Avenir-Heavy.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 300,
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-Light.woff',
                woff2: 'src/assets/fonts/subset-Avenir-Light.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'italic',
              fontWeight: 300,
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-LightOblique.woff',
                woff2: 'src/assets/fonts/subset-Avenir-LightOblique.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'italic',
              fontWeight: 500,
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-MediumOblique.woff',
                woff2: 'src/assets/fonts/subset-Avenir-MediumOblique.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'italic',
              fontWeight: 900,
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-HeavyOblique.woff',
                woff2: 'src/assets/fonts/subset-Avenir-HeavyOblique.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 900,
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-Black.woff',
                woff2: 'src/assets/fonts/subset-Avenir-Black.woff2',
              },
            },
            {
              family: 'Avenir',
              fontDisplay: 'swap',
              fontStyle: 'italic',
              fontWeight: 900,
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-BlackOblique.woff',
                woff2: 'src/assets/fonts/subset-Avenir-BlackOblique.woff2',
              },
            },
            {
              family: 'Avenir Book',
              fontDisplay: 'swap',
              fontStyle: 'italic',
              fontWeight: 'normal',
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-BookOblique.woff',
                woff2: 'src/assets/fonts/subset-Avenir-BookOblique.woff2',
              },
            },
            {
              family: 'Avenir Book',
              fontDisplay: 'swap',
              fontStyle: 'normal',
              fontWeight: 'normal',
              urls: {
                woff: 'src/assets/fonts/subset-Avenir-Book.woff',
                woff2: 'src/assets/fonts/subset-Avenir-Book.woff2',
              },
            },
          ],
        },
      },
      resolve: 'gatsby-plugin-webfonts',
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
        icon: 'src/images/gatsby-icon.png',
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
