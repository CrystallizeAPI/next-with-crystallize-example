import useSWR from 'swr'

import { fetcher } from 'lib/graphql'
import Video from 'components/video'

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
query GET_STORY($path: String!) {
  story: catalogue(path: $path, language: "en") {
    videos: component(id: "hero-video") {
      content {
        ... on VideoContent {
          videos {
            thumbnails {
              url
            }
            playlists
          }
        }
      }
    }
  }
}

`

export async function getStaticProps() {
  const path = `/stories/iceland-adventure`
  const data = await fetcher([query, { path }])

  return { props: { data, path } }
}

export default function Story({ data: initialData, path }) {
  const { data } = useSWR([query, { path }], {
    initialData,
  })

  return (
    <div>
      <h1>Vide autoplay test</h1>
      <Video {...data.data.story.videos.content.videos[0]} playsinline muted />
    </div>
  )
}
