"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button/button";

const Header = () => {
  const router = useRouter();

  return (
    <section className="fixed inset-x-0 bg-slate-500">
      <div className="mx-auto max-w-5xl flex justify-between items-center p-4">
        <h1 className="font-extrabold text-2xl text-white">Logo</h1>
        <div className="flex gap-2">
          <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
          <Button onClick={() => router.push("/sign-up")}>Sign Up</Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
