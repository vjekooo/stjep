import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Stjepanka Pranjkovic`,
    siteUrl: `https://www.mimesis.hr`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId": process.env.CONTENTFUL_SPACE_ID
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Gilda Display`,
            file: `https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap`,
          },
        ],
      },
    },
  ]
};

export default config;
