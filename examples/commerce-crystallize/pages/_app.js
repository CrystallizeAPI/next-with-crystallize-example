import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import { fetcher } from 'lib/graphql'
import { screen } from 'ui/screen'
import { responsive } from 'ui/responsive'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  screen,
  responsive,
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}
