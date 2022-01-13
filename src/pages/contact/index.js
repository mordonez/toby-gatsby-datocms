import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PageBody from "@components/page-body";
import FullImage from "@components/Sections/FullImage";
import Form from "@components/Form";

const Contact = ({ data: { site, page}}) => {
  return (
    <Layout>
      <HelmetDatoCms seo={page.seo} favicon={site.favicon} />
      <FullImage image={page.header} heading={page.title} />
      <PageBody content={page.content} />
      <Form />
      </Layout>
  );
}

export default Contact;

export const ContactQuery = graphql`
  query ContactQuery {
      site: datoCmsSite {
        favicon: faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      page: datoCmsContact {
        seo: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        title
        header {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        content {
          value
          blocks {
            __typename
            id: originalId
            image {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
  }
`;

