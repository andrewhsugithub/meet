import { Input } from "../input";
import { Button } from "./button";

const JoinMeetingBtn = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Enter a room id" />
      <Button type="submit">Join As Guest</Button>
    </div>
  );
};

export default JoinMeetingBtn;
