import useSWR from 'swr'
import Image from '@crystallize/react-image'
import CrystallizeContent from '@crystallize/content-transformer/react'
import { useRouter } from 'next/router'

import { fetcher } from 'lib/graphql'
import Logo from 'ui/logo'
import Section from 'components/story/section'
import {
  Outer,
  Header,
  Title,
  Byline,
  Content,
  Lead,
  Author,
  AuthorName,
  AuthorRole,
  AuthorPhoto,
} from 'components/story/styles'

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
    hero_images: component(id: "hero") {
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

  return { props: { data, path } }
}

export async function getStaticPaths() {
  const data = await fetcher(`
    {
      catalogue(path: "/stories", language: "en") {
        children {
          path
        }
      }
    }
  `)

  return {
    paths: data?.data?.catalogue?.children?.map((c) => c.path) || [],
    fallback: true,
  }
}

export default function Story({ data: initialData, path }) {
  const router = useRouter()

  const { data } = useSWR([query, { path }], {
    initialData,
  })

  if (router.isFallback) {
    return (
      <>
        <Header>
          <Logo size="70" color="#fff" />
        </Header>
        <Outer center>Loading...</Outer>
      </>
    )
  }

  const story = data?.data?.story
  const byline = story?.byline?.content?.items
  const heroImages = story?.hero_images?.content?.images
  const heroVideos = story?.hero_videos?.content?.videos

  return (
    <>
      <Header>
        <Logo size="70" color="#fff" />
      </Header>
      <Outer>
        <Section images={heroImages} videos={heroVideos}>
          <Content>
            <Title>{story?.name}</Title>
            <Lead>
              <CrystallizeContent {...story?.intro?.content?.json} />
            </Lead>
            {!!byline && (
              <Byline>
                {byline.map((author, i) => (
                  <Author key={i}>
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
          </Content>
        </Section>
        {story?.story?.content?.paragraphs?.map(
          ({ title, body, images, videos }, i) => {
            return (
              <Section key={i} images={images} videos={videos}>
                <Content>
                  <Title>{title?.text}</Title>
                  <Lead>
                    <CrystallizeContent {...body?.json} />
                  </Lead>
                </Content>
              </Section>
            )
          }
        )}
      </Outer>
    </>
  )
}
