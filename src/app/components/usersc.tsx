type Usersapi = {
    id: Number,
    avatar: String,
    name: String, 
    createdAt: String | Date,
}

async function UsersAPI(){
    const userdata = await fetch('https://65b5b76841db5efd2867d4cf.mockapi.io/api/v1/users')
    const users = (await userdata.json()) as Usersapi[];

    return(
        
        <div className=" items-center m-6 flex-1 h-96 w-129 bg-zinc-700 p-4 mt-7 rounded-xl overflow-y-scroll">
        {users.slice(0,50).map((user) => (
          <div className="bg-zinc-600 flex rounded-xl p-3 mt-2 items-center gap-3 h-24" key={user.id}>
              <img className=" rounded-full" src={user.avatar} width={40} height={40} alt="perilimg" />
              <h3 className=" text-zinc-50 font-semibold text-pretty w-28">{user.name}</h3>
              <div className=" ml-36 flex-1">
              <button className=" flex justify-center items-center w-24 mb-3 py-1 rounded-lg mt-4  text-zinc-50 font-semibold text-center bg-zinc-800 hover:bg-zinc-900 ml-10 ">Follow</button>
              <div className=" text-right"> <p className=" w-30 font-sans text-xs text-zinc-400" > Account created in:{user.createdAt}</p></div>
              </div>
              
              
            
          </div>
           
      ))}
   
           
  </div>
    );

}
export default function UsersC(){
    
    return(
            <div className="flex-1">
                
                   <UsersAPI></UsersAPI>
            </div>
    );
}