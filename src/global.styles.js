import { createGlobalStyle } from "styled-components";
import px2vw from "./utilities/px2vw";

const GlobalStyle = createGlobalStyle`
 body {
    background-color: #FCFCFC; 
    font-family: 'Open Sans Condensed';

    padding: 20px 40px;
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
}
a {
    text-decoration: none;
    color: black;
}


  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default GlobalStyle;