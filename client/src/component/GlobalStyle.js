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
    background-color: #faf9f8;
    overflow-y: auto;
    height: 100vh;
    width: 100%;
    /* font-family: 'Nanum Gothic Coding', monospace; */
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

  .second {
    display: grid;
	  grid-template-columns: repeat(3, 1fr);
	  gap: 10px;
  }

  .third {
    /* border: solid grey 1px; */
    height: 25em;
    border-radius: .6em;
    padding: .6em;

    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      transition: box-shadow 0.3s ease-in-out 0s;
    }

  }

  .para {
    word-break: break-all;
		margin-top: 0.5em;
		text-align: start;
  }


  .icon {
	  font-size: 1.3em;
    cursor: pointer;
  }

  .item-button {
    width: 22em;
	  height: 20em;
	  border: none;
	  background: transparent;
  }

`;

export default GlobalStyles;
