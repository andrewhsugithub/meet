"use client";

import { signOut } from "next-auth/react";

const SignOutBtn = () => {
  return (
    <button
      className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
