import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Hero from "@components/Sections/Hero";

const HomePage = ({ data: { site, home } }) => {
  const hero = {
    image: home.heroImage,
    heading: home.heroHeading,
    subheading: home.heroSubheading,
    imagePosition: 'right',
    style: 'light'
  }
  return (
    <Layout>
      <HelmetDatoCms seo={home.seo} favicon={site.favicon} />
      <Hero data={hero} />
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
        heroHeading
        heroSubheading
        heroImage {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
  }
`;

