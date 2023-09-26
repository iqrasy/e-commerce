import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0 auto;
    padding: 5em 0;
    /* background-color: #faf9f8; */
    background-color: beige;
    overflow-y: auto;
    height: 100vh;
    /* width: 70%;
    font-family: 'Nanum Gothic Coding', monospace; */
  }

`

export default GlobalStyles;
