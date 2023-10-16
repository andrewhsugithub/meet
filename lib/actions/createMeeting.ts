"use server";

import prisma from "../db";

const createMeeting = async (id: string) => {
  const meeting = await prisma.meeting.create({
    data: {
      name: "",
      description: "",
      Owner: {
        connect: {
          id,
        },
      },
      Subscribers: {
        connect: [
          {
            id,
          },
        ],
      },
    },
  });
  return meeting;
};

export default createMeeting;
