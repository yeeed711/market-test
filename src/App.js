import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LoginHome from "./pages/LoginHome";

const GlobalStyle = createGlobalStyle`
${reset}
    a{
        text-decoration:none;
        cursor: pointer;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size: 10px;
    }
    img{
        width: 100%;
        height: auto;
    }
    button {
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: inherit;
    }
    input {
        &:focus {
        outline:none;
      }
    }
    textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
}
    .ir {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
    
    .a11y-hidden{
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        clip-path: polygon(0 0, 0 0, 0, 0);
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <LoginHome />
    </>
  );
}

export default App;
