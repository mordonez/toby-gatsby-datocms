import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Sections from "@components/Sections";

const HomePage = ({data: {site, home}}) => {
  return (
    <Layout>
      <HelmetDatoCms seo={home.seo} favicon={site.favicon} />
      <Sections sections={home.sections} />
      </Layout>
  );
}

export default HomePage;

export const HomePageQuery = graphql`
  query HomeQuery {
      site: datoCmsSite {
        favicon: faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      home: datoCmsHome {
        seo: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
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

