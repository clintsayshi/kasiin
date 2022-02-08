import Link from "next/link";
import React from "react";

function Signup() {
  const Input = (props) => {
    return (
      <div className="space-y-1">
        <label
          className="block text-xs capitalize opacity-70"
          htmlFor={props.name}
        >
          {props.label}
        </label>
        <input
          className="w-full px-4 py-2 text-sm bg-white"
          id={props.name}
          name={props.name}
          type={props.type}
          placeholder={`Enter ${props.placeholder}`}
        />
      </div>
    );
  };

  const container = "w-full sm:w-4/6 md:w-2/4 lg:w-4/12 mx-auto px-4";

  return (
    <>
      <div className="bg-slate-100 h-screen flex flex-col justify-center gap-10">
        <header className={container}>
          <h1 className="text-2xl">Welcome to Kasiin</h1>
          <p className="text-sm">Home for local businesses and freelancers</p>
        </header>

        <form className={container + " space-y-6"}>
          <div className="space-y-1">
            <label className="block text-xs opacity-70" htmlFor="join_name">
              Display Name
            </label>
            <input
              className="w-full px-4 py-2 text-sm bg-white"
              id="join_name"
              name="join_name"
              type="text"
              placeholder="Enter display name"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs opacity-70" htmlFor="join_email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 text-sm bg-white"
              id="join_email"
              name="join_email"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs opacity-70" htmlFor="join_password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 text-sm bg-white"
              id="join_password"
              name="join_password"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <Input
            name="join_confirm_password"
            type="password"
            label="confirm password"
            placeholder="password again"
          />

          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600">
            Sign up
          </button>
        </form>

        <p className={container}>
          If you don't have a Kasiin account{" "}
          <Link href="/login">
            <a className="underline">Login</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Signup;
