import Link from "next/link";
import React from "react";
import { Input } from "../components/inputs";

function Login() {
  const container = "w-full sm:w-4/6 md:w-2/4 lg:w-4/12 mx-auto px-4";

  return (
    <div className="bg-slate-100 h-screen flex flex-col justify-center gap-14">
      <header className={container}>
        <h1 className="text-2xl">
          Welcome back to <span className="font-medium">Kasiin</span>
        </h1>
        <p className="text-sm">Home for local businesses and freelancers</p>
      </header>

      <form className={container + " space-y-6"}>
        <Input
          name="login_email"
          type="email"
          label="email"
          placeholder="email"
        />
        <Input
          name="login_password"
          type="password"
          label="password"
          placeholder="password"
        />

        <button className="px-4 py-2 text-sm font-medium text-white bg-green-600">
          Sign in
        </button>
      </form>

      <p className={container}>
        If you don't have a Kasiin account{" "}
        <Link href="/signup">
          <a className="underline">Sign up</a>
        </Link>
      </p>
    </div>
  );
}

export default Login;
