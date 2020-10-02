import React from 'react'
import { fetcher } from 'lib/graphql'

import Hero from 'components/hero'
import Layout from 'components/layout'
import List from 'components/item-list'

const query = `
query GET_FOLDER($path: String!) {
  folder: catalogue(path: $path, language: "en") {
    id
    name
    title : component(id: "title"){
      content {
        ...on SingleLineContent {
          text
        }
      }
    }
    hero_images: component(id: "hero-image") {
      content {
        ... on ImageContent {
          images {
            url
            altText
            variants {
              url
              width
              height
            }
          }
        }
      }
    }
    hero_videos: component(id: "hero-video") {
      content {
        ... on VideoContent {
          videos {
            playlists
            thumbnails {
              url
              altText
              variants {
                url
                width
                height
              }
            }
          }
        }
      }
    }
    intro: component(id: "brief") {
      id
      name
      content {
        ... on RichTextContent {
          json
        }
      }
    }
    children {
      id
      path
      name
      type
      shape {
        name
      }
      intro: component(id: "intro") {
        id
        name
        content {
          ... on RichTextContent {
            json
          }
        }
      }
      intro: component(id: "intro") {
        id
        name
        content {
          ... on RichTextContent {
            json
          }
        }
      }
      videos: component(id: "hero-video") {
        content {
          ... on VideoContent {
            videos {
              playlists
              thumbnails {
                url
                altText
                variants {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
      images: component(id: "hero") {
        content {
          ... on ImageContent {
            images {
              url
              altText
              variants {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
}
`

export async function getStaticProps({ params }) {
  const path = `/stories`
  const data = await fetcher([query, { path }])
  return { props: { ...data, path }, revalidate: 1 }
}

const Stories = ({ data, errors }) => {
  if (errors) {
    console.log('error', errors)
    return <div>Ops ...</div>
  }
  const { folder } = data
  const hero = {
    images: folder?.hero_images?.content?.images,
    videos: folder?.hero_videos?.content?.videos,
    lead: folder?.intro?.content,
    title: folder?.title?.content?.text,
  }
  const hasMedia = !!hero.images || !!hero.videos
  return (
    <Layout tint={hasMedia ? 'white' : 'black'}>
      <Hero {...hero} />
      <List {...folder} title="Some inspirational stories" />
    </Layout>
  )
}

export default Stories
