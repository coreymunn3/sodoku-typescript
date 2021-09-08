import React from 'react'
import ReactDOM from 'react-dom'
import { register, configureStore } from './core'
import { PersistGate } from 'redux-persist/integration/react'
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

const { store, persister } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Content>
          <Title>Sodoku</Title>
          <Card>
            <NewGame />
            <Grid />
            <NumberButtons />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

register()
