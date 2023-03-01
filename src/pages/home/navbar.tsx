import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {IconBxHomeAlt} from "./icons";
import {IconUser} from "./icons";
import { IconLogOut } from "./icons";

interface User {
    displayName: string | null;
    photoURL: string | null;
    uid: string;
}

export const Navbar = (): JSX.Element => {
    
    const navigate = useNavigate();
    const user: User | null | undefined = useAuthState(auth)[0];
    console.log(user)
    const signUserOut = async () => {
        await signOut(auth);
        navigate("/")
    };

    return (
      <div className="relative inline-block lg:col-span-3 border-2 px-3 border-gray-300">
        <div className=" sticky top-4 grid justify-items-center">
          <div className="text-center my-4 text-2xl">
            <h1>
              LightLines
            </h1>
          </div>
          <nav className="grid gap-3 mt-20 items-center">
            <Link to="/" className="flex items-center"><IconBxHomeAlt className="h-6 w-6"/><span className="mx-4 text-xl">Home</span></Link>
            <Link to="/profile" className="flex items-center"> <IconUser className="h-6 w-6"/><span className="mx-4 text-xl">Profile</span></Link>
            <button onClick={signUserOut} className="flex items-center"><IconLogOut className="h-6 w-6"/><span className="mx-4 text-xl">Log out</span></button>
          </nav>
          <div className="fixed bottom-0 flex items-center my-4 p-3 w-[220px] rounded-full bg-gray-400">
            <img className="rounded-full w-10" src={user?.photoURL || ""} width="100" height="100"  referrerPolicy="no-referrer"/>
            <p className="mx-3 text-white">{user?.displayName}</p>
          </div>
        </div>
      </div>
    );
};