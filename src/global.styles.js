import { createGlobalStyle } from "styled-components";
import px2vw from "./utilities/px2vw";

 const GlobalStyle = createGlobalStyle`
 body {
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


`;

export default GlobalStyle;