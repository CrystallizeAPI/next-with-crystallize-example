import useSWR from 'swr'
import styled from 'styled-components'

import { fetcher } from '../lib/graphql'

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
  {
    catalogue(path: "/web-frontpage", language: "en") {
      gridsToShow: component(id: "grids") {
        content {
          ... on GridRelationsContent {
            grids {
              id
              name
              rows {
                columns {
                  layout {
                    colspan
                    rowspan
                  }
                  item {
                    path
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Pre = styled.pre`
  display: block;
  padding: 15px;
`

export async function getStaticProps() {
  const data = await fetcher(query)

  return { props: { data } }
}

export default function Home(props) {
  const { data } = useSWR(query, { initialData: props.data })

  return <Pre>{JSON.stringify(data, null, 2)}</Pre>
}
