import useSWR from 'swr'
import styled from 'styled-components'

import { fetcher } from 'lib/graphql'

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
  {
    catalogue(path: "/shop", language: "en") {
      children {
        name
        path
      }
    }
  }
`

const Pre = styled.pre(
  ({ theme }) => `
    display: block;
    padding: 15px;
    width: ${theme.screen.xs}px;
  `
)

export async function getStaticProps() {
  const data = await fetcher(query)

  return { props: { data } }
}

export default function Story({ data: initialData, path }) {
  const { data } = useSWR([query, { path }], {
    initialData,
  })

  return <Pre>{JSON.stringify(data, null, 2)}</Pre>
}
