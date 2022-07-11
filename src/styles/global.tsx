import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }  

  body, input, button, a {
    font-family: "Poppins"
  }
  
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
  }


`;
