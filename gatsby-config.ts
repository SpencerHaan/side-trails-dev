import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Side Trails Software Development",
    description: "I'm a software systems developer that builds, and rebuilds, systems and applications, following a dynamic, principles based agile development process.",
    siteUrl: "https://sidetrails.dev",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "How I Work",
        link: "/how-i-work",
      },
    ]
  },
  trailingSlash: "never",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-cname",
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "expertise",
        "path": `${__dirname}/content/expertise`
      },
      __key: "expertise"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "principles",
        "path": `${__dirname}/content/principles`
      },
      __key: "principles"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "testimonials",
        "path": `${__dirname}/content/testimonials`
      },
      __key: "testimonials"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "values",
        "path": `${__dirname}/content/values`
      },
      __key: "values"
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 90
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Side Trails Software Development",
        short_name: "Side Trails",
        icon: "src/images/icon.png",
      }
    },
  ]
};

export default config;
