import { css, Global } from "@emotion/core";
import React from "react";
import { HomePage } from "./pages/home-page";

export const App: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap");

          * {
            font-family: "Lato", sans-serif;
          }
        `}
      />
      <HomePage />
    </>
  );
};
