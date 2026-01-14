"use client";

import { signIn, signOut } from "next-auth/react";

export default function AuthPage() {
  return (
    <div>
      <h1>Login</h1>

      <button onClick={() => signIn("google")}>
        Login with Google
      </button>

      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}
