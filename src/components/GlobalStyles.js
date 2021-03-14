import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #c41c16;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body{
        font-family: "Monserrat", sans-serif;
        width: 100%;
        background-color: #333;
        overflow-y: auto;
    }
    h2{
        font-size: 3rem;
        font-family: "Abril Fatface", cursive;
        font-weight: lighter;
        color: #c41c16;

    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }

    @font-face {
            font-family: "neon";
            src: url("./NeonTubes2.otf");
        }

`;

export default GlobalStyles;
