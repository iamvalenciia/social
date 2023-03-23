import { Navbar } from "../../components/navbar";
import { ToolSearchBar } from "../search/toolSearchBar";
import { ProfileUser } from "./profilesection";
import { CheckLargeScreen } from "../../components/checkLargeScreen";

export const Profile = (): JSX.Element => {
  const islargescreen = CheckLargeScreen();
  return (
    <div className="grid h-screen lg:grid-cols-12 md:grid-cols-6 xl:mx-32 lg:mx-24">
      <Navbar />
      <ProfileUser />
      {islargescreen ? <ToolSearchBar /> : null}
    </div>
  );
};
