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

//specifies that it returns a JSX element (type annotation).
export const Navbar = (): JSX.Element => {
    
    const navigate = useNavigate();

    //The [0] syntax is used to access the first value of the returned array.
    const user: User | null | undefined = useAuthState(auth)[0];
    
    const signUserOut = async () => {
        await signOut(auth);
        navigate("/login")
    };

    // line "{user && (" say that if user is not equal to null 
    // then the app will display their information.
    return (
        <div>
          {user ? (
            <div>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
            </div>
          ) : null}
          {user && (
            <div>
              <p>{user.displayName}</p>
              <img src={user.photoURL || ""} width="100" height="100" referrerPolicy="no-referrer" />
              <button onClick={signUserOut}>Log Out</button>
            </div>
          )}
        </div>
      );
};