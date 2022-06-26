import React from "react";
import SplashImg from "../../assets/full-logo.svg";
import styled, { keyframes } from "styled-components";

const ImageFadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const Splash = styled.img`
  height: 200px;
`;

const FlexCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: conter;
  align-items: center;
`;

const AniSplash = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  animation: 0.5s ease-in-out ${ImageFadeOut} forwards;
  animation-delay: 1.5s;
`;

export default function LoginSplash() {
  return (
    <AniSplash>
      <FlexCenter>
        <Splash src={SplashImg} />
      </FlexCenter>
    </AniSplash>
  );
}
