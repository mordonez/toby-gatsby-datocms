import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PageBody from "@components/page-body";
import FullImage from "@components/Sections/FullImage";

const ContactThanks = ({ data: { site, page}}) => {
  return (
    <Layout>
      <HelmetDatoCms seo={page.seo} favicon={site.favicon} />
      <FullImage image={page.header} heading={page.title} />
      <PageBody content={page.thanks} />
      </Layout>
  );
}

export default ContactThanks;

export const ContactThanksQuery = graphql`
  query ContactThanksQuery {
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
        thanks {
          value
        }
      }
  }
`;

