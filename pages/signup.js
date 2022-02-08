import React from "react";

function Signup() {
  return (
    <>
      <div class="bg-slate-100 h-screen">
        <header class="px-4 py-10">
          <h1 class="text-2xl">Welcome to Kasiin</h1>
          <p class="text-sm">Home for local businesses and freelancers</p>
        </header>

        <section class="w-full sm:w-4/6 md:w-2/4 border px-4 mx-auto flex flex-col gap-4">
          <article class="space-y-1">
            <label class="block text-xs opacity-80" for="join_name">
              Display Name
            </label>
            <input
              class="w-full px-4 py-2 text-sm"
              id="join_name"
              name="join_name"
              type="text"
              placeholder="Enter display name"
            />
          </article>
          <article class="space-y-1">
            <label class="block text-xs opacity-80" for="join_email">
              Email
            </label>
            <input
              class="w-full px-4 py-2 text-sm"
              id="join_email"
              name="join_email"
              type="email"
              placeholder="Enter email"
            />
          </article>
        </section>
      </div>
    </>
  );
}

export default Signup;
