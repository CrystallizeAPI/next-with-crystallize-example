import useSWR from 'swr'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { fetcher } from 'lib/graphql'

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
  query GET_STORY($path: String!) {
    catalogue(path: $path, language: "en") {
      name
      path
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

export async function getStaticProps({ params }) {
  const path = `/stories/${params.story}`
  const data = await fetcher([query, { path }])

  console.log(path, params)

  return { props: { data, path } }
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export default function Story({ data: initialData, path }) {
  const router = useRouter()

  const { data } = useSWR([query, { path }], {
    initialData,
  })

  if (router.isFallback) {
    return 'loading...'
  }

  return <Pre>{JSON.stringify(data, null, 2)}</Pre>
}
