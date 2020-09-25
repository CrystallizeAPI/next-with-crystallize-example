import useSWR from 'swr'
// import styled from 'styled-components'
import { useRouter } from 'next/router'

import { fetcher } from 'lib/graphql'
import Logo from 'ui/logo'
import CrystallizeContent from '@crystallize/content-transformer/react'
import Image from '@crystallize/react-image'
import Media from './media'
import {
  Outer,
  Section,
  Header,
  Title,
  Byline,
  Content,
  Lead,
  Author,
  AuthorName,
  AuthorRole,
  AuthorPhoto,
  CoverImage,
} from './styles'

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
query GET_STORY($path: String!) {
  story: catalogue(path: $path, language: "en") {
    name
    path
    publishedAt
    title: component(id: "title") {
      id
      name
      type
      content {
        ... on SingleLineContent {
          text
        }
      }
    }
    hero: component(id: "hero") {
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
    hero_video: component(id: "hero-video") {
      content {
        ... on VideoContent {
          videos {
            playlists
          }
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
    story: component(id: "story") {
      id
      name
      type
      content {
        ... on ParagraphCollectionContent {
          paragraphs {
            title {
              text
            }
            body {
              json
            }
            images {
              url
              altText
              variants {
                url
                width
                height
              }
            }
            videos{
              playlists
            }
          }
        }
      }
    }
    byline: component(id: "byline") {
      id
      name
      content {
        ... on ItemRelationsContent {
          items {
            id
            name: component(id: "name") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
            email: component(id: "email") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
            role: component(id: "role") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
            picture: component(id: "picture") {
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
    }
  }
}

`

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
  // const { catalogue } = data;
  const story = data?.data?.story
  const byline = story?.byline?.content?.items
  console.log(story)
  return (
    <>
      <Header>
        <Logo size="70" />
      </Header>
      <Outer>
        <Section>
          <CoverImage>
            <Media {...story} />
          </CoverImage>
          <Content>
            <Title>{story?.name}</Title>
            <Lead>
              <CrystallizeContent {...story?.intro?.content?.json} />
            </Lead>
          </Content>
          {!!byline && (
            <Byline>
              {byline.map((author) => (
                <Author>
                  <AuthorPhoto>
                    <Image
                      {...author?.picture?.content?.images?.[0]}
                      sizes="50px"
                    />
                  </AuthorPhoto>
                  <AuthorName>{author?.name?.content?.text}</AuthorName>
                  <AuthorRole>{author?.role?.content?.text}</AuthorRole>
                </Author>
              ))}
            </Byline>
          )}
        </Section>
        {story?.content?.paragraphs.length && <ParagraphSection />}
      </Outer>
    </>
  )
}

const ParagraphSection = () => <Section></Section>
