import { Home as HomeIcon, UserRoundSearch, LogOut, Plus } from "lucide-react";
import Link from "next/link";
export default function Aside(){
    return(
        <aside className=" w-64 bg-zinc-950 p-8" >
              <nav className=" flex flex-col gap-3 font-semibold ">
                <a className=" flex gap-2 hover:text-zinc-400" href="/">
                  <HomeIcon></HomeIcon>
                   Home</a>
                 <a className=" flex gap-2
                 hover:text-zinc-400" href="/users">
                  <UserRoundSearch></UserRoundSearch>
                  Users</a>
                 
                  <a className=" flex gap-2
                 hover:text-zinc-400 " href="">
                  <Plus></Plus>
                  Create Post</a>
                
              </nav>


              <div className="mt-128 flex-1 "  >
                  <div className=" w-auto h-auto flex items-center gap-3">
                      <img src="https://i1.sndcdn.com/artworks-ktYSEjcVlN1WzszK-RlmR9w-t500x500.jpg" width={40} height={40} alt=" Perfil" className="rounded-full" />
                    <p className=" text-zinc-600 font-semibold">Mikael#1</p>
                  </div>
                </div>
                <a className=" flex gap-2 my-4
                 font-semibold hover:text-zinc-400" href="">
                 <LogOut></LogOut>
                  Log-Out</a>
            </aside>
    );
}