import { useRef } from 'react'
import styled from 'styled-components'

import { useIntersectionObserver } from 'lib/intersection-observer'

import Media from './media'

const Outer = styled.section`
  min-height: 100vh;
`

const CoverImage = styled.div(
  ({ $show }) => `
  opacity: ${$show ? 1 : 0};
  transition: opacity 500ms;
`
)

export default function Section({ children, images, videos }) {
  const ref = useRef()
  const intersectionEntry = useIntersectionObserver(ref)
  if (intersectionEntry?.isIntersecting) {
    console.log(intersectionEntry?.intersectionRatio)
  }

  return (
    <Outer ref={ref}>
      <CoverImage $show={intersectionEntry?.isIntersecting}>
        <Media images={images} videos={videos} sizes="100vw" />
      </CoverImage>
      {children}
    </Outer>
  )
}
