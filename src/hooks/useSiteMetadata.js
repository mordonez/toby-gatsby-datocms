import { graphql, useStaticQuery } from 'gatsby'

{/** TODO: Refactor to DatoCMS */}
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            titleTemplate
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
