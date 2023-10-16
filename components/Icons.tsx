import {
  Camera,
  LucideProps,
  Mic,
  MicOff,
  Video,
  VideoOff,
} from "lucide-react";

const Icons = {
  camOff: (props: LucideProps) => <VideoOff {...props} />,
  camOn: (props: LucideProps) => <Video {...props} />,
  micOn: (props: LucideProps) => <Mic {...props} />,
  micOff: (props: LucideProps) => <MicOff {...props} />,
  camera: (props: LucideProps) => <Camera {...props} />,
};

export default Icons;
