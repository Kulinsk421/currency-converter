import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import Form from "./components/Form/Form";
import { breakpoint, colors } from "./helpers/consts";
import u from "./helpers/unit";

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
    ${breakpoint.phone} {
      font-size: 50%;
    }
  }
  body{
    background-color: ${colors.grey300};
    font-family: 'Lato', sans-serif;
    padding: 0 ${u(1)}
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
