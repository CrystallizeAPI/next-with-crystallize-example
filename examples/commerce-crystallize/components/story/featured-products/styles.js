import styled from 'styled-components'

export const Outer = styled.div`
  min-height: 100vh;
  padding: 50px 25px;
  background-size: 10px 10px;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);

  scroll-snap-align: start;
  ${({ theme }) => theme.responsive.smPlus} {
    scroll-snap-align: end;
    padding: 100px;
  }
`
export const Inner = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => theme.responsive.mdPlus} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${({ theme }) => theme.responsive.sm} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const H2 = styled.h2`
  font-size: 24px;
  margin: 100px 0 50px;
  text-align: center;
  color: #fff;
  line-height: 1em;
  ${({ theme }) => theme.responsive.smPlus} {
    font-size: 35px;
    margin: 100px 0;
  }
`
export const Product = styled.a`
  display: block;
  position: relative;
  border-radius: 6px;
  padding: 4px;
  background: #fff;
  ${({ theme }) => theme.responsive.smPlus} {
    padding: 15px;
  }
`
export const ImgWrapper = styled.div`
  display: flex;
  height: 300px;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  ${({ theme }) => theme.responsive.xs} {
    height: 200px;
    picture {
      width: 100%;
    }
  }
`
export const Content = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 30px 0;
  }
`

export const Name = styled.div`
  font-weight: 800;
  font-size: 16px;
  ${({ theme }) => theme.responsive.mdPlus} {
    font-size: 24px;
  }
`
export const Price = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #d98979;
  ${({ theme }) => theme.responsive.mdPlus} {
    font-size: 20px;
  }
`
