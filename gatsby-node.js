require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`src/templates/page.js`);
    resolve(
      graphql(`
        {
          allContentfulPage(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulPage.edges.forEach((edge) => {
          createPage({
            path: `/${edge.node.slug}`,
            component: pageTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};

// // Schema customization
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   const typeDefs = `
//   type ContentfulPage implements Node {
//     slug: String!
//     pageTitle: String
//     seoTitle: String
//     seoFeaturedImage: ContentfulAsset
//     seoDescription: SeoDescription
//     blocks: [ContentfulBlock]
//   }

//   type ContentfulBlock implements Node {
//     __typename: String
//     title: String
//     # Define other common fields among different block types
//   }

//   type ContentfulVideoBlock implements ContentfulBlock {
//     title: String
//     video: ContentfulAsset
//     videoPosterImage: ContentfulAsset
//   }

//   type ContentfulTwoColumnTextPhotoBlock implements ContentfulBlock {
//     title: String
//     showTextBeforeImageFirstOnDesktop: Boolean
//     text: RawContent
//     image: ContentfulAsset
//   }

//   type ContentfulPhotoBlock implements ContentfulBlock {
//     title: String
//     image: ContentfulAsset
//   }

//   type ContentfulFullWidthTextBlock implements ContentfulBlock {
//     title: String
//     text: RawContent
//   }

//   type ContentfulDescription implements Node {
//     description: String
//   }

//   type SeoDescription {
//     seoDescription: String
//   }

//   type ContentfulAsset {
//     file: ContentfulFile
//   }

//   type ContentfulFile {
//     url: String
//   }

//   type RawContent {
//     raw: String
//   }
// `;

//   createTypes(types);
// };
