import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface User {
    displayName: string | null;
    photoURL: string | null;
    uid: string;
}

export const Navbar = (): JSX.Element => {
    
    const navigate = useNavigate();
    const user: User | null | undefined = useAuthState(auth)[0];
    
    const signUserOut = async () => {
        await signOut(auth);
        navigate("/")
    };

    return (
      <div>
        <div>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} width="100" height="100"  referrerPolicy="no-referrer"/>
          <button onClick={signUserOut}> Log Out </button>
        </div>
        <div>
            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link>
        </div>
      </div>
    );
};