import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  html {
    min-height: 100%;

    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      #root {
        min-height: 100vh;
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        display: flex;
        font-family: sans-serif;
        justify-content: center;
      }
    }
  }
`}  
`
