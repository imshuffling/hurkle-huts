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
