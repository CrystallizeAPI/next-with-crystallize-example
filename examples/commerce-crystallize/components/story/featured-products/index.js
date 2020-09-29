import React from 'react'
import Link from 'next/link'
import Image from '@crystallize/react-image'

import {
  Outer,
  Inner,
  H2,
  Product,
  ImgWrapper,
  Content,
  Name,
  Price,
} from './styles'

export default function FeaturedProducts({ products }) {
  return (
    <Outer>
      <H2>Featured products</H2>
      <Inner>
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
