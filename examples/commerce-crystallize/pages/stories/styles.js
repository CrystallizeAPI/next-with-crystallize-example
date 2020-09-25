import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  padding: 50px 50px;
`
export const Outer = styled.div``

export const Section = styled.section`
  min-height: 100vh;
`

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1em;
`
export const SectionHeading = styled.h2``

export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
export const Lead = styled.div`
  font-size: 1.3rem;
`

export const Byline = styled.div`
  position: absolute;
  left: 50px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const AuthorName = styled.div`
  margin-left: 15px;
  font-weight: 600;
`
export const AuthorRole = styled.div`
  margin-left: 10px;
`
export const AuthorPhoto = styled.div`
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #dfdfdf;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CoverImage = styled.div``
