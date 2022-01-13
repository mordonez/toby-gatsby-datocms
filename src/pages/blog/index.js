import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import BlogPosts from "@components/blog-posts"

const BlogPage = ({ data: { site, blog, allPosts } }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      {allPosts.nodes.length > 0 && <BlogPosts posts={allPosts.nodes} />}
    </Layout>
  );
}

export default BlogPage;

export const BlogPageQuery = graphql`
  query BlogQuery {
      site: datoCmsSite {
        favicon: faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      blog: datoCmsBlog {
        seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          fullwidth: gatsbyImageData(layout: FULL_WIDTH)
          small: gatsbyImageData(width: 760)
        }
      }
    }

  }
`;

