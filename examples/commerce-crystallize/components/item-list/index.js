import React from 'react'
import styled from 'styled-components'
import MicroFormats from 'components/microformats'

const Outer = styled.div`
  width: 100%;
  background: #fff;
  padding: 150px 100px;
  min-height: 80vh;
`
const H2 = styled.h2`
  font-size: calc(12px + 1.3vw);
  margin: 0;
  padding: 50px 0;
`
const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`
const List = ({ children, title }) => {
  return (
    <Outer>
      {!!title && <H2>{title}</H2>}
      <Inner>
        {children.map((child, i) => (
          <MicroFormats {...child} />
        ))}
      </Inner>
    </Outer>
  )
}

export default List
