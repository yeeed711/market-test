import React from "react";

export default function LoginEmail() {
  return (
    <div>
      <form action="POST">
        <label htmlFor="">이메일</label>
        <input type="email" required />
        <label htmlFor="">비밀번호</label>
        <input type="password" required />
        <button></button>
      </form>
    </div>
  );
}
