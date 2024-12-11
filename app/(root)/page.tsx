import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    // <p className="p-4"><Button size="default">Click here</Button></p>
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      {/* userinput and file type in the wireframe could use to improve the timeline and firebase */}
      <div className="p-4">Hello from the user</div>
      user experience designer in the first section of the maribia
    </div>
  );
}
