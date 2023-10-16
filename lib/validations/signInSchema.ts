import { z } from "zod";

export const SignInSchema = z.object({
  username: z.string(),
  //   email: z.string().email(),
  password: z.string().min(8),
});

export type SignInFormSchema = z.infer<typeof SignInSchema>;
