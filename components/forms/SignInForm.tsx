"use client";

import {
  type SignInFormSchema,
  SignInSchema,
} from "@/lib/validations/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInFormSchema> = async (data) => {
    // client-side validation
    const result = await SignInSchema.safeParse(data);
    console.log(result);
    if (!result.success) {
      let errorMessages = "";
      // output error message
      result.error.issues.forEach((issue) => {
        errorMessages += issue.path[0] + ": " + issue.message + ". ";
      });
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (res?.error) {
      // TODO: user not found
      alert("user not found, redirecting to sign up page");
      router.push("/sign-up");
    } else {
      router.push(`/user/${data.username}`);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email/Username"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500">{`${errors.username.message}`}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}
          <button
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 disabled:bg-slate-500"
            disabled={isSubmitting}
            type="submit"
          >
            Sign In
          </button>

          {/* <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
            Error message
          </div> */}

          <Link href={"/sign-up"} className="text-sm mt-3 text-right">
            Don't have an account <span className="underline">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
