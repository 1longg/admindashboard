"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type IFormInput = {
  email: string;
  password: string;
};


function Login() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  console.log(errors)
  return (
    <div className="bg-backgroundLogin flex items-center justify-center h-screen">
      <div className="bg-white border rounded-md p-6 py-8 min-w-[500px]">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-center">Welcome</p>
          <Image src="/Images/logo.png" alt="logo" width={150} height={150} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col">
            <input
              className="px-4 py-4 border-b-2 outline-none mb-2"
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern:{
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Email invalidate'
              }})}
            />
            {errors.email?.message && (
              <span className="text-sm text-red-500 ml-4">{errors.email.message}</span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <div>
              <input
                className="w-full px-4 py-4 border-b-2 outline-none mb-2"
                type="password"
                placeholder="Password"
                {...register("password", { required: true, minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                } })}
              />
            </div>
            {errors.password?.message && (
              <span className="text-sm text-red-500 ml-4">{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="outline-none text-xl border rounded-2xl py-2 mt-8 mb-4 w-full uppercase font-semibold text-white bg-slate-950 hover:bg-slate-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
