import { Navbar } from "../home/navbar";
import { SearchBar } from "../../components/searchbar";
import { ProfileUser } from "./userprofile";

export const Profile = (): JSX.Element => {
  return (
    <div className="grid h-screen lg:grid-cols-12 md:grid-cols-6 xl:mx-32 lg:mx-24">
      <Navbar />
      <ProfileUser />
      <SearchBar />
    </div>
  );
};
