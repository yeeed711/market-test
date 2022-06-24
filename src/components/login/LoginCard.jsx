import React from "react";
import styled from "styled-components";
import EmailIcon from "../../assets/full-logo.svg";

const LoginBtn = styled.button`
  position: relative;
  width: 290px;
  height: 44px;
  background-color: #ffffff;
  color: #767676;
  font-size: 14px;
  cursor: pointer;
  border-radius: 44px;
  &::before {
    position: absolute;
    left: 16px;
    top: 50%;
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background: url(${EmailIcon}) no-repeat center / 24px 24px;
  }
`;

const LoginItem = styled.li`
  margin-bottom: 15px;
`;

const LoginList = styled.ul`
  bottom: -14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LoginCard() {
  return (
    <LoginList>
      <LoginItem>
        <LoginBtn>이메일로 로그인</LoginBtn>
      </LoginItem>
      <LoginItem>
        <LoginBtn>회원가입</LoginBtn>
      </LoginItem>
    </LoginList>
  );
}
