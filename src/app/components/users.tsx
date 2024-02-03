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
        <div className=" flex-1 h-80 w-97 bg-zinc-700 p-4 mt-7 rounded-xl">
        {users.slice(0,3    ).map((user) => (
          <div className=" bg-zinc-600 flex rounded-xl p-3 mt-2" key={user.id}>
              <img className=" rounded-full" src={user.avatar} width={40} height={40} alt="perilimg" />
              <h3 className=" text-zinc-50 font-semibold text-center">{user.name}</h3>
              <span className=" font-sans text-xs text-end text-zinc-400" > Account created in:{user.createdAt}</span>

          </div>
           
      ))}
      <div className=" ml-24">
      <button className=" flex justify-center items-center w-28 py-1 rounded-lg mt-4  text-zinc-50 font-semibold text-center bg-zinc-800 hover:bg-zinc-900 ">See Users</button>
      </div>
           
  </div>
    );

}
export default function Users(){
    
    return(
            <div>
                <UsersAPI></UsersAPI>
            </div>
    );
}