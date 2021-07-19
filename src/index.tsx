import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core'
import { GlobalStyles } from './styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <h1>Hello</h1>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
