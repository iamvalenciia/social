import { Navbar } from "../home/navbar";
import { SearchBar } from "../../components/searchbar";
import { ProfileUser } from "./userprofile";
import { CheckScreenSize } from "../../components/islargescreen";

export const Profile = (): JSX.Element => {
  const islargescreen = CheckScreenSize();
  return (
    <div className="grid h-screen lg:grid-cols-12 md:grid-cols-6 xl:mx-32 lg:mx-24">
      <Navbar />
      <ProfileUser />
      {islargescreen ? <SearchBar /> : null}
    </div>
  );
};
