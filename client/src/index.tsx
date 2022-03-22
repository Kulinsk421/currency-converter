import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { breakpoint } from "./helpers/consts";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

    
  }
  html {
    font-size: 62.5%;
    ${breakpoint.monitor} {
      font-size: 80%;
    }
    ${breakpoint.tabletLandscape} {
      font-size: 55%;
    }
    ${breakpoint.tabletPortrait} {
      font-size: 50%;
    }
    ${breakpoint.phone} {
      font-size: 40%;
    }
  }

  body{
    font-family: 'Lato', sans-serif;

  }
  
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
