"use server";

import prisma from "../db";

const checkUserExists = async (usernameOrEmail: string | null | undefined) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ username: usernameOrEmail! }, { email: usernameOrEmail! }],
    },
  });
  return user;
};

export default checkUserExists;
