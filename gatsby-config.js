module.exports = {
  siteMetadata: {
    title: `Optident`,
    description: `Cuidamos tu sonrisa con experiencias agradables`,
    author: `molinao.angel@gmail.com`,
    headerDir: `Los Naranjos Interseccion las Azucenas, edificio "Los Naranjos" 170503 Quito`,
    headerTelefono: `Tel: (02) 335-0361`,
    headerMision: 'Mision',
    headerVision: 'Vision',
    headerServicios: 'Servicios',
    headerContacto: 'Contacto'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        background_color: `#ffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
