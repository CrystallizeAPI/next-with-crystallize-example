import { useRef } from 'react'
import styled from 'styled-components'

import { useIntersectionObserver } from 'lib/intersection-observer'

import Media from './media'

const Outer = styled.section`
  min-height: 150vh;
`

const CoverImage = styled.div.attrs((props) => ({
  style: {
    opacity: props.$visibility,
  },
}))`
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
    threshold: [0.0, 0.75],
  })
  return (
    <Outer ref={ref}>
      <CoverImage $visibility={intersectionEntry?.intersectionRatio}>
        <Media images={images} videos={videos} />
      </CoverImage>
      <ContentWrapper>{children}</ContentWrapper>
    </Outer>
  )
}
