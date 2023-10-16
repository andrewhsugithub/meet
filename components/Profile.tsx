"use client";

import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";
import { Button } from "./ui/button/button";
import Icons from "./Icons";

const Profile = () => {
  const [getStream, setGetStream] = useState(false);

  return (
    <div className="flex flex-col flex-between items-center justify-center">
      {getStream ? (
        <VideoPlayer />
      ) : (
        <div className="bg-slate-500 rounded-full p-6">
          <Icons.camera className="text-white" />
        </div>
      )}
      <Button onClick={() => setGetStream(() => !getStream)}>
        {getStream ? "Change Pic" : "Test Stream"}
      </Button>
    </div>
  );
};

export default Profile;
