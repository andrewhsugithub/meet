"use client";

import { redirect, useRouter } from "next/navigation";
import { Button } from "./button";
import createMeeting from "@/lib/actions/createMeeting";
import { useSession } from "next-auth/react";
import checkUserExists from "@/lib/actions/checkUserExists";

const NewMeetingBtn = () => {
  const router = useRouter();
  // TODO find a better way to get user id from next auth what we found 1. use callbacks 2. just call the database(useUser hook)
  // const { data: session, status } = useSession();
  // const user = await checkUserExists(session!.user?.name);

  const handleClick = async () => {
    // const meeting = await createMeeting(user!.id);
    // router.push(`/meeting/${meeting.id}`);
  };

  return (
    <Button type="submit" onClick={handleClick}>
      New Meeting
    </Button>
  );
};

export default NewMeetingBtn;
