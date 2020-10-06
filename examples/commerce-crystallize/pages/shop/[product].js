import useSWR from 'swr'
import styled from 'styled-components'
import Image from '@crystallize/react-image'
import CrystallizeContent from '@crystallize/content-transformer/react'
import { useRouter } from 'next/router'

import { fetcher } from 'lib/graphql'
import Layout from 'components/layout'

const Outer = styled.div``
const ProductWrapper = styled.section`
  background: #fff;
  display: grid;
  ${({ theme }) => theme.responsive.mdPlus} {
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
  }
`

const Btn = styled.button`
  border: 3px solid black;
  background: transparent;
  font-size: 20px;
  margin-top: 35px;
  font-weight: 800;
  padding: 12px 35px;
  border-radius: 45px;
  &:hover {
    color: #fff;
    background: black;
  }
`

const ImgWrapper = styled.div`
  background: ${({ theme }) => theme.colors.productBg};
  position: relative;
  margin-top: 140px;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
  ${({ theme }) => theme.responsive.lg} {
    margin-left: 100px;
  }
  ${({ theme }) => theme.responsive.mdPlus} {
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`
const Content = styled.div`
  padding: 50px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h2,
  p {
    max-width: 600px;
    margin: 0;
  }
  h1 {
    font-size: calc(12px + 2vw);
  }
  h2 {
    padding: 10px 0 0;
  }
  p {
    line-height: 1.6em;
  }
  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 0 100px;
  }
`
const RichContent = styled.section`
  background: #fff;
  min-height: 100vh;
  padding: 100px 25px;
  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 100px 100px;
  }
  ${({ theme }) => theme.responsive.sm} {
    padding: 100px 50px;
  }
`

const PropertiesTable = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 50px auto;
  h3 {
    padding: 5px 0;
    position: absolute;
    transform: translateY(-200%);
    left: 50px;
  }

  ${({ theme }) => theme.responsive.lg} {
    h3 {
      transform: translateY(0);
      left: 100px;
    }
  }

  ${({ theme }) => theme.responsive.smPlus} {
    grid-template-columns: 1fr 1fr;
    h3 {
      left: 150px;
    }
  }
  ${({ theme }) => theme.responsive.sm} {
    h3 {
      left: 100px;
    }
  }
`
const Bulk = styled.div`
  display: grid;
  padding: 25px 25px;
  h5 {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  ${({ theme }) => theme.responsive.smPlus} {
    padding: 25px 50px;
  }
`

// Fine tune the query in the playground: https://api.crystallize.com/<your-tenant-identifier>/catalogue
const query = `
query GET_PRODUCT($path: String!) {
 product: catalogue(path: $path, language: "en") {
    name
    path
    publishedAt
    id
    name
    ...on Product {
      name
      path
      defaultVariant{
        price
        images{
          variants{
            width
            url
          }
        }
      }

    }   
    summary: component(id: "summary") {
      id
      content {
        ... on RichTextContent {
          json
        }
      }
    }
    features: component(id: "features") {
      content {
        ... on PropertiesTableContent {
          sections {
            title
            properties {
              key
              value
            }
          }
        }
      }
    }  
  }
}
`

export async function getStaticProps({ params }) {
  const path = `/shop/${params.product}`
  const data = await fetcher([query, { path }])
  return { props: { data, path }, revalidate: 1 }
}

export async function getStaticPaths() {
  const data = await fetcher(`
    {
      catalogue(path: "/shop", language: "en") {
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
  console.log(path)
  const { data } = useSWR([query, { path }], {
    initialData,
  })

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const product = data?.data?.product
  const defaultImage = data?.data?.product?.defaultVariant?.images
  const name = product?.name
  const price = product?.defaultVariant?.price
  const summary = product?.summary?.content?.json
  const features = product?.features?.content?.sections
  return (
    <Layout tint="black">
      <Outer>
        <ProductWrapper>
          <ImgWrapper>
            <Image {...defaultImage?.[0]} />
          </ImgWrapper>
          <Content>
            <h1>{name}</h1>
            <h2>${price}</h2>
            <CrystallizeContent {...summary} />
            <Btn
              onClick={() =>
                alert(
                  'Functionality not implemented in this boiler, see our next.js boilerplate '
                )
              }
            >
              Buy
            </Btn>
          </Content>
        </ProductWrapper>
        <RichContent>
          {features?.map((feature) => (
            <PropertiesTable>
              <h3>{feature?.title}</h3>
              {feature?.properties?.map((property) => (
                <Bulk>
                  <h5>{property?.key}</h5>
                  <p>{property?.value}</p>
                </Bulk>
              ))}
            </PropertiesTable>
          ))}
        </RichContent>
      </Outer>
    </Layout>
  )
}
