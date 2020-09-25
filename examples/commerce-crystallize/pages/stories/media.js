import Image from '@crystallize/react-image'
import styled from 'styled-components'

const Outer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

export default function Media({ hero, hero_video }) {
  console.log('hero', hero)
  console.log('hero', hero_video)
  if (!!hero_video?.content?.video) {
    return <div />
  }
  return (
    <Outer>
      <Image {...hero?.content?.images?.[0]} />
    </Outer>
  )
}
