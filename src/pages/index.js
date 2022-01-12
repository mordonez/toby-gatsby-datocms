import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import { HelmetDatoCms } from "gatsby-source-datocms";

const HomePage = ({data: {site, home}}) => {
  return (
    <Layout>
      <HelmetDatoCms seo={home.seo} favicon={site.favicon} />

      <section className="section has-background-light">
        <div className="container">
          <div className="content">
            Main content here
          </div>
        </div>
      </section>
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
      }
  }
`;

