import { Link, useLocation } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IconBxHomeAlt } from "../../components/icons";
import { IconUser } from "../../components/icons";
import { IconLogOut } from "../../components/icons";
import { IconBxSearch } from "../../components/icons";

interface User {
  displayName: string | null;
  photoURL: string | null;
  uid: string;
}

export const Navbar = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const user: User | null | undefined = useAuthState(auth)[0];
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="relative inline-block md:col-span-2 lg:col-span-3 border-2 px-3 border-gray-300">
      <div className=" sticky top-0 grid justify-items-center ">
        <div className=" flex items-center my-2 p-3 xl:h-[55px] xl:w-[220] rounded-full bg-gray-200">
          <img
            className="rounded-full w-10"
            src={user?.photoURL || ""}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
          <p className="mx-3 text-gray-900">{user?.displayName}</p>
        </div>
        <nav className="grid my-15 items-center text-gray-500">
          <Link
            to="/"
            className={`flex items-center p-3 my-3 rounded-full hover:bg-gray-200 ${
              location.pathname == "/" || location.pathname === "/home"
                ? " font-bold text-gray-800"
                : ""
            }`}
          >
            <IconBxHomeAlt className={`h-6 w-6 fill-blue`} />
            <span className="mx-4 text-xl">Home</span>
          </Link>
          <Link
            to="/profile"
            className={`flex items-center p-3 my-3 rounded-full hover:bg-gray-200 ${
              location.pathname === "/profile" ? " font-bold text-gray-800" : ""
            }`}
          >
            <IconUser className="h-6 w-6" />
            <span className="mx-4 text-xl">Profile</span>
          </Link>
          <Link
            to="/searchbar"
            className={`lg:hidden flex items-center p-3 my-3 rounded-full hover:bg-gray-200 ${
              location.pathname === "/searchbar"
                ? " font-bold text-gray-800"
                : ""
            }`}
          >
            <IconBxSearch className="h-6 w-6" />
            <span className="mx-4 text-xl">Search</span>
          </Link>
          <button
            onClick={signUserOut}
            className="flex items-center p-3 my-3 rounded-full hover:bg-gray-200"
          >
            <IconLogOut className="h-6 w-6" />
            <span className="mx-4 text-xl">Log out</span>
          </button>
        </nav>
        <div className="xl:mt-96 lg:mt-64 md:mt-48 justify-items-center grid text-center text-gray-400">
          <p className="text-1xl text-center">
            &#169; 2023 Juan Pablo Valencia
          </p>
        </div>
      </div>
    </div>
  );
};
