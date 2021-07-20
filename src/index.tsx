import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core'
import { GlobalStyles } from './styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'

import { Card, Content, Grid, Title } from './components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Sodoku</Title>
      <Card>
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
