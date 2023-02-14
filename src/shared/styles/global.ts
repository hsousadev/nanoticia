import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  :root {
    --GREEN: #65D2AE;
    --LIGHT-GREEN: #E4F4F4;
    --DARK-BLUE: #213249;
    --GRAY: #828282;
  }

  mark {
    color: var(--GREEN);
    background-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }


  h1, h2, h3, h4, p {
    margin: 0;
    font-family: 'Inter';
    font-style: normal;
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }
  
`;
