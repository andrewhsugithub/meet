"use client";

import Link from "next/link";
// import { useState } from "react";
import {
  SignUpSchema,
  type SignUpFormSchema,
} from "@/lib/validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUser } from "@/lib/actions/signUp.actions";

const SignUpForm = () => {
  // const [data, setData] = useState<SignUpFormSchema>();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormSchema> = async (data) => {
    // client-side validation
    const result = await SignUpSchema.safeParse(data);
    console.log(result);
    if (!result.success) {
      let errorMessages = "";
      // output error message
      result.error.issues.forEach((issue) => {
        errorMessages += issue.path[0] + ": " + issue.message + ". ";
      });
      return;
    }

    // add to db with server actions
    await createUser(data);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input type="text" placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
          <input type="text" placeholder="Username" {...register("username")} />
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
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
          )}
          <button
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 disabled:bg-slate-500"
            disabled={isSubmitting}
            type="submit"
          >
            Sign Up
          </button>

          {/* {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )} */}

          <Link className="text-sm mt-3 text-right" href={"/sign-in"}>
            Already have an account? <span className="underline">Sign In</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
