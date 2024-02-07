import Posts from "./components/posts";
import { Home as HomeIcon, UserRoundSearch, LogOut, Plus } from "lucide-react";
import Users from "./components/users";
import Link from "next/link";
import Aside from "./components/aside";


export default function Home() {
  
  return (
      <div className=" h-screen flex flex-col">
        <div className=" flex flex-1">
            <Aside></Aside>
            <main className="flex p-8 gap-3">
              <Posts></Posts>
              <Users></Users>
            </main>
        </div>
      </div>
  );

  
}
