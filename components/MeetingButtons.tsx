import UserMeetingForm from "./forms/UserMeetingForm";
import JoinMeetingBtn from "./ui/button/JoinMeetingBtn";
import NewMeetingBtn from "./ui/button/NewMeetingBtn";

const UserMeetingSettings = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <UserMeetingForm />
      <NewMeetingBtn />
      <JoinMeetingBtn />
    </div>
  );
};

export default UserMeetingSettings;
