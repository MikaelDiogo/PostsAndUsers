type Usersapi = {
    id: Number,
    avatar: String,
}

async function UsersAPI(){
    const userdata = await fetch('https://65b5b76841db5efd2867d4cf.mockapi.io/api/v1/users')
    const users = (await userdata.json()) as Usersapi[];

    return(
        <div>
        {users.slice(0,2).map((user) => (
          <div key={user.id}>
              <img className=" rounded-full" src={user.avatar} width={40} height={40} alt="perilimg" />
          </div>
           
      ))}

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