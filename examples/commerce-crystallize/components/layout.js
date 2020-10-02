import React from 'react'
import styled from 'styled-components'
import Logo from 'ui/logo'

const tints = {
  white: '#fff',
  black: '#000',
  blue: 'blue',
}
const Header = styled.header`
  position: fixed;
  padding: 25px;
  z-index: 100;
  ${({ theme }) => theme.responsive.smPlus} {
    padding: 50px 50px;
  }
`
const Main = styled.main``
const Footer = styled.footer``

const Layout = ({ tint = 'black', children }) => (
  <Main>
    <Header>
      <Logo size="200" color={tints[tint]} />
    </Header>
    {children}
    <Footer />
  </Main>
)

export default Layout
