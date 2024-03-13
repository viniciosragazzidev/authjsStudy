import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { register } from "../lib/actions";

export const RegisterForm = () => {
  const [errorMessage, dispatch] = useFormState(register, undefined);

  return (
    <div>
      <h1>Register</h1>
      <form action={dispatch} className="space-y-3 text-slate-900">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={` mb-3 text-2xl`}>Please log in to continue.</h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="name"
              >
                Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name "
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>

          <RegisterButton />
        </div>
        <>{errorMessage && <p>{errorMessage}</p>}</>
      </form>
    </div>
  );
};

function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="mt-4 w-full  bg-slate-900 py-2 rounded-md text-sm font-medium text-white hover:bg-slate-700"
      aria-disabled={pending}
    >
      Register
    </button>
  );
}
