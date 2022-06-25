import React from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const LoginBtn = styled.button`
  width: 322px;
  height: 44px;
  background-color: #ffc7a7;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  border-radius: 44px;
  margin-top: 14px;
`;

const LoginH2 = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const LoginInput = styled.input`
  width: 322px;
  height: 33px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  color: #ea7f42;
  caret-color: #ea7f42;
  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }
  &:focus {
    color: #ea7f42;
    border-bottom: 1px solid #ea7f42;
  }
`;

const LoginLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #767676;
`;

const EmailSign = styled.a`
  display: block;
  color: #767676;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
`;

const Fieldset = styled.fieldset`
  width: 322px;
  margin-top: 40px;
`;

export default function LoginEmail() {
  return (
    <>
      <LoginForm>
        <LoginH2>로그인</LoginH2>
        <Fieldset>
          <LoginLabel htmlFor="email">이메일</LoginLabel>
          <LoginInput
            id="email"
            type="email"
            placeholder="이메일 주소를 입력해 주세요."
            required
          />
          <LoginLabel htmlFor="pw">비밀번호</LoginLabel>
          <LoginInput
            id="pw"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            required
          />
          <LoginBtn>로그인</LoginBtn>
          <EmailSign href="#none">이메일로 회원가입</EmailSign>
        </Fieldset>
      </LoginForm>
    </>
  );
}
