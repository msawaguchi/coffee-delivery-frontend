import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CartItemContextProvider } from './contexts/CartItemsContext'

export function App() {
  return (
    <BrowserRouter>
      <CartItemContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />

          <Router />
        </ThemeProvider>
      </CartItemContextProvider>
    </BrowserRouter>
  )
}
