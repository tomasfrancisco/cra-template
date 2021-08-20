import { createGlobalStyle } from "styled-components/macro";
import React from "react";
import { HomePage } from "./pages/home-page";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap");

  * {
    font-family: "Lato", sans-serif;
  }
`;
export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};
