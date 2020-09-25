import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  padding: 50px 50px;
`
export const Outer = styled.div(
  ({ center }) => `
  ${
    center &&
    `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center
  `
  };
`
)

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1em;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
`
export const SectionHeading = styled.h2`
  font-size: 2rem;
  margin: 0;
  line-height: 1em;
  line-height: 1em;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  max-width: 600px;
`

export const Content = styled.div(
  ({ mirror, fold }) => `
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    box-sizing: border-box;
    padding:80px;
  ${
    mirror
      ? `
      flex-direction:column;
      align-items:flex-start;
      justify-content:flex-end;
      `
      : `
      flex-direction:column;
      align-items:flex-end;
      justify-content:flex-end;

  
    `
  };
  ${
    fold &&
    `
      align-items:center;
      justify-content:center;
      flex-direction:column;
  `
  }
  `
)

export const Lead = styled.div`
  font-size: 1.3rem;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  max-width: 600px;
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
  color: #fff;
`
export const AuthorName = styled.div`
  margin-left: 15px;
  font-weight: 600;
`
export const AuthorRole = styled.div`
  margin-left: 10px;
  font-size: 13px;
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
