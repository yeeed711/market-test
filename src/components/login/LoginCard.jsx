import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EmailIcon from "../../assets/icon/icon-email.svg";
import SignUpIcon from "../../assets/icon/icon-signup.svg";

const LoginBtn = styled.button`
  position: relative;
  width: 322px;
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
  margin-bottom: 20px;
`;

const LoginList = styled.ul`
  bottom: -14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpBtn = styled(LoginBtn)`
  &::before {
    background: url(${SignUpIcon}) no-repeat center / 24px 24px;
  }
`;

export default function LoginCard() {
  return (
    <>
      <LoginList>
        <LoginItem>
          <Link to="/login">
            <LoginBtn name="email">이메일로 로그인</LoginBtn>
          </Link>
        </LoginItem>
        <LoginItem>
          <SignUpBtn name="signUp">회원가입</SignUpBtn>
        </LoginItem>
      </LoginList>
    </>
  );
}
