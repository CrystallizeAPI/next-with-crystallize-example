import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from '@crystallize/react-image'

const Outer = styled.div`
  background: #e1c8c2;
`
const Inner = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 100px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`
const H2 = styled.h2`
  font-size: 65px;
  line-height: 1em;
`
const Product = styled.a`
  display: block;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  height: 750px;
  position: relative;
  box-shadow: 1px 2px 14px rgba(0, 0, 0, 0.05);
`
const ImgWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  position: absolute;
  height: 80%;
  overflow: hidden;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
const Content = styled.div`
  position: absolute;
  left: 20px;
  height: 20%;
  width: calc(100% - 40px);
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.div`
  font-weight: 800;
  font-size: 30px;
`
const Price = styled.div`
  font-weight: 600;
  font-size: 20px;
`
export default function FeaturedProducts({ products }) {
  return (
    <Outer>
      <Inner>
        <H2>Featured products</H2>
        {products.map((prod, i) => {
          const { path, name, defaultVariant } = prod
          return (
            <Link href={path} as={path} key={i}>
              <Product>
                <ImgWrapper>
                  <Image {...defaultVariant?.images?.[0]} sizes="33vw" />
                </ImgWrapper>
                <Content>
                  <Name>{name}</Name>
                  <Price>${defaultVariant?.price}</Price>
                </Content>
              </Product>
            </Link>
          )
        })}
      </Inner>
    </Outer>
  )
}
