"use client";
import React from "react";
import ActionLogin from "./loginForm";
import { RegisterForm } from "./registerForm";
const Login = () => {
  const [modeRegister, setModeRegister] = React.useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Hello World</h1>
      {modeRegister ? <RegisterForm /> : <ActionLogin />}

      <span
        className="cursor-pointer"
        onClick={() => setModeRegister(!modeRegister)}
      >
        {modeRegister ? "Ja tem uma conta?" : "Não tem uma conta?"}
      </span>
    </main>
  );
};

export default Login;
