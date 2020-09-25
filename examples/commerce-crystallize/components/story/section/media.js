import Image from '@crystallize/react-image'
// import Video from 'components/video-player'
import styled from 'styled-components'

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 40%
    );
  }
`

export default function Media({ images, videos }) {
  // if (!!videos) {
  //   return <Video {...videos?.[0]} />
  // }

  return (
    <Outer>
      <Image {...images?.[0]} sizes="100vw" />
    </Outer>
  )
}
