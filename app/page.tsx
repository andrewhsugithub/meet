import Header from "@/components/Header";
import JoinMeetingBtn from "@/components/ui/button/JoinMeetingBtn";
import NewMeetingBtn from "@/components/ui/button/NewMeetingBtn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-screen flex flex-col items-center justify-center bg-slate-300 gap-4">
        <NewMeetingBtn />
        <JoinMeetingBtn />
      </div>
    </main>
  );
}
