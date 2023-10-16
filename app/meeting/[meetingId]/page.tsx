import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { meetingId: string } }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/sign-in");
  }

  return <div>{params.meetingId}</div>;
};

export default Page;
