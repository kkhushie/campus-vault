"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Campus Vault</h1>

      {session ? (
        <p>Welcome {session.user?.email}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
