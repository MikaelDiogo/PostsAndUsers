import Users from "./users";



type Postsapi = {
    id: Number,
    user_name: String,
    title : String,
    content: String,
    createdAt : Date | String, 
  
  }

 

  async function PostsAPI(){
    const data = await fetch('https://65b5b76841db5efd2867d4cf.mockapi.io/api/v1/posts')
    const posts = (await data.json()) as Postsapi[];
    
    
    return(
        <>
            {posts.slice(0,50).map((post) => (
                <div className=" bg-zinc-600 rounded-xl p-4 mt-2" key={post.id}>
                    <div className="flex gap-96">
                    <h3 className=" text-center text-zinc-50 font-semibold text-start ">{post.user_name}</h3>
                    <span className="flex text-xs pt-1 ml-auto text-zinc-400">{post.createdAt}</span>
                    </div>
                    <h3 className=" text-zinc-400 font-semibold text-lg">{post.title}</h3>
                    
                    <span className=" text-zinc-300 w-auto text-justify ">{post.content}</span>

                </div>
            ))}
        </>      
    );
  }


export default function Posts(){
    return(
        <div className="">
            <h1 className=" text-xl text-zinc-50 font-semibold">All Posts</h1>
            <div className=" bg-zinc-700 h-128 w-256 rounded-md p-3 overflow-y-scroll">
                <PostsAPI></PostsAPI>
            </div>
        
        </div>
        
    );
}