import React from "react";
import LoginCard from "./LoginCard";
import styled from "styled-components";
import LogoImg from "../../assets/symbol-logo-W.png";
import LoginSplash from "./Splash";

const LoginContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ea7f42;
`;

const LoginLogoImg = styled.img`
  width: 144px;
  height: 144px;
  margin-bottom: 177px;
`;
export default function Login() {
  return (
    <>
      <LoginContainer>
        <LoginLogoImg src={LogoImg} />
        <LoginCard />
        <LoginSplash />
      </LoginContainer>
    </>
  );
}
