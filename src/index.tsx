import React from 'react'
import ReactDOM from 'react-dom'
import { unregister, configureStore } from './core'
import { GlobalStyles } from './styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { Provider } from 'react-redux'

import { Card, Content, Grid, Title } from './components'

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content>
        <Title>Sodoku</Title>
        <Card>
          <Grid />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
