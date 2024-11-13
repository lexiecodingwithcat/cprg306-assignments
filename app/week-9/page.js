"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const login = async () => {
    await gitHubSignIn();
  };
  const logout = async () => {
    await firebaseSignOut();
  };
  return (
    <main>
      <h1>Week 9</h1>

      {user ? (
        <div className="flex flex-col">
          <p>Welcome, {user.displayName}</p>
          <Link href="./week-9/shopping-list">Continue to shoppingList</Link>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </main>
  );
}

export default Page;
