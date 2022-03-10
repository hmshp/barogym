import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        {...register("email", { required: '필수 입력사항입니다.' })}
        placeholder="이메일을 입력해 주세요."
      />
      <p>{errors.email?.message}</p>
      <input
        {...register("password", { required: '필수 입력사항입니다.' })}
        placeholder="비밀번호를 입력해 주세요."
      />
      <p>{errors.password?.message}</p>
      <button>로그인</button>
    </form>
  );
}