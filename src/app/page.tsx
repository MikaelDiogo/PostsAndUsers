import Posts from "./components/posts";




export default function Home() {
  
  return (
      <div className=" h-screen flex flex-col">
        <div className=" flex flex-1">
            <aside className=" w-64 bg-zinc-950 p-8" >
              <nav className=" flex flex-col gap-3 font-semibold ">
                <a className=" hover:text-zinc-400" href="">Home</a>
                <a className=" hover:text-zinc-400" href="">Users</a>
                <a className=" hover:text-zinc-400" href="">Log-Out</a>
              </nav>
              <div className="mt-128">
                  <div className="flex items-center gap-3">
                      <img src="https://i1.sndcdn.com/artworks-ktYSEjcVlN1WzszK-RlmR9w-t500x500.jpg" width={40} height={40} alt=" Perfil" className="rounded-full" />
                    <p className=" text-zinc-600 font-semibold">Seu Nome</p>
                  </div>
                </div>
            </aside>
            <main className="flex-1 p-8">
              <Posts>
                
              </Posts>
             
            </main>
        </div>
      </div>
  );

  
}
