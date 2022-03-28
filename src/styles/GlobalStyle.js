import { createGlobalStyle } from "styled-components";
import breakpoint from './breakpoint';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Nanum Gothic", sans-serif;
    line-height: 1.5;
    margin-bottom: 10em;
    @media only screen and (min-width: ${breakpoint.size.xl}) {
      font-size: 1.5rem;
    }
  }
`;

export const themeColor = "rgb(204, 192, 184)";

export default GlobalStyle;