import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Sections from "@components/Sections";

const Blockpage = ({ data: { site, blockpage}}) => {
  return (
    <Layout>
      <HelmetDatoCms seo={blockpage.seo} favicon={site.favicon} />
      <Sections sections={blockpage.sections} />
      </Layout>
  );
}

export default Blockpage;

export const BlockpageQuery = graphql`
  query BlockpageBySlug($id: String) {
      site: datoCmsSite {
        favicon: faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      blockpage: datoCmsBlockpage(id: { eq: $id }) {
        seo: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        title
        sections {
          ... on DatoCmsHero {
            model {
              apiKey
            }
            heading
            subheading
            imagePosition
            style
            actions{
              label
              link {
                __typename

              }
              actionType
              link {
                ... on DatoCmsHome {
                  id
                }
                ... on DatoCmsBlockpage {
                  id
                  slug
                }
              }
              icon
            }
            image {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          ... on DatoCmsPageHeading {
            model {
              apiKey
            }
            heading
            subheading
          }
        }
      }
  }
`;

