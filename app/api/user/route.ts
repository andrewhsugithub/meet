import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export default async function getUser(req: NextRequest, res: NextResponse) {
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       username: req.body!.username,
  //       email: req.body!.email,
  //     },
  //   });
  //   res.json(user);
}
