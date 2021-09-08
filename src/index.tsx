import React from 'react'
import ReactDOM from 'react-dom'
import { unregister, configureStore } from './core'
import { GlobalStyles } from './styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { Provider } from 'react-redux'

import {
  Card,
  Content,
  Grid,
  NewGame,
  NumberButtons,
  Title,
} from './components'

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content>
        <Title>Sodoku</Title>
        <Card>
          <NewGame />
          <Grid />
          <NumberButtons />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
