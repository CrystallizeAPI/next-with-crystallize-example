import React from 'react'
import CrystallizeContent from '@crystallize/content-transformer/react'
import styled from 'styled-components'

import Media from 'components/media'
const H1 = styled.h1`
  margin: 0%;
  padding: 0;
  line-height: 110%;
  font-size: calc(24px + 1.8vw);
  max-width: 1000px;

  color: ${(p) => (p.hasMedia ? '#fff' : '000')};
`
const Lead = styled.div`
  font-size: calc(12px + 0.5vw);
  max-width: 600px;
  text-align: center;

  color: ${(p) => (p.hasMedia ? '#fff' : '000')};
`
const Hero = styled.section`
  height: 80vh;
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`
const Block = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.2);

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  text-align: center;
`

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 50px;
  &:after,
  &:before {
    width: 57%;
    height: 4px;
    border-radius: 3px;
    content: '';
    background: ${(p) => (p.hasMedia ? 'white' : 'black')};
    position: absolute;
    top: 0;
    z-index: 20;
  }
  &:after {
    right: 0;
    /* transform-origin: 100 50%; */
    transform: rotate(-35deg);
  }
  &:before {
    left: 0;
    transform: rotate(35deg);
  }
`

const HeroBlock = ({ images, videos, title, lead }) => {
  const hasMedia = !!images || !!videos
  return (
    <Hero>
      <Block>
        {!!title && <H1 hasMedia={hasMedia}>{title}</H1>}
        {!!lead && (
          <Lead hasMedia={hasMedia}>
            <CrystallizeContent {...lead?.json} />
          </Lead>
        )}
      </Block>
      {!!hasMedia && <Media images={images} videos={videos} nolazy />}
      <Arrow hasMedia={hasMedia} />
    </Hero>
  )
}

export default HeroBlock
