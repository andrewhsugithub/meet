"use client";

import { useEffect, useRef, useState } from "react";
import Icons from "./Icons";

const VideoPlayer = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [camera, setCamera] = useState(true);
  const [mic, setMic] = useState(true);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        vidRef.current!.srcObject = stream;
      });
    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const toggleCamera = () => {
    if (camera) stream!.getVideoTracks()[0].enabled = false;
    else stream!.getVideoTracks()[0].enabled = true;
    setCamera(() => !camera);
  };

  const toggleMic = () => {
    if (mic) stream!.getAudioTracks()[0].enabled = false;
    else stream!.getAudioTracks()[0].enabled = true;
    setMic(() => !mic);
  };

  return (
    <div className="aspect-video bg-black rounded-lg w-full relative">
      <video
        ref={vidRef}
        autoPlay
        muted
        className="aspect-video object-cover rounded-lg absolute"
      />
      <div className="flex justify-center items-center gap-2 absolute">
        {camera ? (
          <Icons.camOn
            className="text-white rounded-full bg-green-500 cursor-pointer"
            onClick={toggleCamera}
          />
        ) : (
          <Icons.camOff
            className="text-white rounded-full bg-red-500 cursor-pointer"
            onClick={toggleCamera}
          />
        )}
        {mic ? (
          <Icons.micOn
            className="text-white rounded-full bg-green-500 cursor-pointer"
            onClick={toggleMic}
          />
        ) : (
          <Icons.micOff
            className="text-white rounded-full bg-red-500 cursor-pointer"
            onClick={toggleMic}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
