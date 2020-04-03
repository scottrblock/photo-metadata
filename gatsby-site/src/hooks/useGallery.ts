import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";
import chain from 'lodash/chain';
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';


interface Query {
  allFile: {
    nodes: {
      id: string;
      name: string;
      publicURL: string;
      childImageSharp: {
        fluid: FluidObject;
      };
    }[];
  };
}

const useGallery = () => {
  // TODO: Make "content/gallery" dynamic somehow..
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(
          filter: { sourceInstanceName: { eq: "content/gallery" } },
          sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
    publicURL: node.publicURL,
    year: node.name.split('-')[0],
    month: node.name.split('-')[1],
    day: node.name.split('-')[2],
  })).reduce((acc, node) => {
    const year = node.year;
    const month = node.month;
    const day = node.day;

    if(!acc[year]) acc[year] = {};
    const yearValues = acc[year];

    if(!yearValues[month]) yearValues[month] = {};
    const monthValues = yearValues[month]

    monthValues[day] = node
    return acc;
  }, Object.create(null));
};

export default useGallery;
