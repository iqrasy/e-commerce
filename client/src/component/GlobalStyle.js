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

  .items{
    width: 220px !important;
		height: 220px;
  }

  .main {
    	margin-top: 10em;
	display: flex;
	justify-content: center;
	align-items: center;
  }

  .para {
    word-break: break-all;
		margin-top: 0.5em;
		text-align: start;
  }

  .second {
    display: grid;
	  grid-template-columns: repeat(3, 1fr);
	  gap: 10px;
  }

  .icon {
	font-size: 1.3em;
  }

  .item-button {
    width: 22em;
	  height: 20em;
	  border: none;
	  background: transparent;
  }

`;

export default GlobalStyles;
