import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Globalstyle = createGlobalStyle`
${reset} 
*{box-sizing:border-box;}
a{text-decoration: none; color: #1d1d1d;}
`;