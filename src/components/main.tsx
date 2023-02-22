import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Main = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };
    return(
    <div>
        <div>
            {/* If user != null, then display all their information */} 
            {user && (
                <>
                    <p>{user?.displayName}</p>
                    {/* If photoURL = Null, then show an empty string */}
                    <img src={user?.photoURL || ""} width="100" height="100"  referrerPolicy="no-referrer"/>
                    <button onClick={signUserOut}> Log Out </button>
                </>
            )} 
        </div>
    </div>
    );
};