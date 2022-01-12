import { useStaticQuery, graphql } from 'gatsby'

{/** TODO: Refactor to DatoCMS */ }
export default function useMenu() {
  const { dataJson } = useStaticQuery(
    graphql`
      query {
        dataJson {
          navigation {
            title
            url
          }
        }
      }
    `
  )
  return dataJson
}
