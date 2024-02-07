import Aside from "../components/aside";
import Posts from "../components/posts";
import UsersC from "../components/usersc";


export default function ProductList(){
    return(
        <div className="flex">
            <Aside></Aside>
            <UsersC></UsersC>
        </div>
    );
}