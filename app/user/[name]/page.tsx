import UserMeetingSettings from "@/components/MeetingButtons";
import Profile from "@/components/Profile";
import UserInfo from "@/components/UserInfo";
import checkUserExists from "@/lib/actions/checkUserExists";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { name: string } }) => {
  const user = await checkUserExists(params.name);
  if (!user) {
    // TODO: add a 404 page
    console.log("user not found");
    redirect("/sign-up");
  }

  return (
    <main className="mx-auto max-w-[95%] p-8">
      <h1 className="text-center font-bold text-3xl py-4">
        HELLO {params.name} !
      </h1>
      <section className="grid grid-cols-2 place-items-center py-4 bg-green-500">
        <Profile />
        <UserMeetingSettings />
      </section>
      <section className="py-4 bg-orange-500">
        <UserInfo />
      </section>
    </main>
  );
};

export default Page;
