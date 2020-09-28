import { useRef } from 'react'
import styled from 'styled-components'

import { useIntersectionObserver } from 'lib/intersection-observer'

import Media from './media'

const Outer = styled.section`
  min-height: 100vh;
`

const CoverMedia = styled.div`
  opacity: ${(p) => (p.$show ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: opacity 0.5s ease-in-out 0ms;
`

const ContentWrapper = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
`

export default function Section({ children, images, videos }) {
  const ref = useRef()
  const intersectionEntry = useIntersectionObserver(ref, {
    threshold: 0.2,
  })

  const show = intersectionEntry?.intersectionRatio > 0.5

  return (
    <Outer ref={ref}>
      <CoverMedia $show={show}>
        <Media images={images} videos={videos} show={show} />
      </CoverMedia>
      <ContentWrapper>{children}</ContentWrapper>
    </Outer>
  )
}
