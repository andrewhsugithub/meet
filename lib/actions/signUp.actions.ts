"use server";

import { redirect } from "next/navigation";
import prisma from "../db";
import { type SignUpFormSchema } from "../validations/signUpSchema";
import bcrypt from "bcryptjs";

export async function createUser(data: SignUpFormSchema) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      username: data.username,
    },
  });

  await redirect(`/${data.username}`);
}
