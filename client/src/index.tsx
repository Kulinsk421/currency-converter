import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { breakpoint, colors } from "./helpers/consts";

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
      font-size: 75%;
    }
    ${breakpoint.tabletLandscape} {
      font-size: 55%;
    }
    ${breakpoint.tabletPortrait}{
      font-size: 45%;
    }
    ${breakpoint.phone} {
      font-size: 30%;
    }

  }
  body{
    background-color: ${colors.grey400};
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
