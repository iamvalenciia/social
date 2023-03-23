import { Navbar } from "../../components/navbar";
import { ToolSearchBar } from "../search/toolSearchBar";
import { Posts } from "./homesection";
import { CheckLargeScreen } from "../../components/checkLargeScreen";

export const Home = (): JSX.Element => {
    const islargescreen = CheckLargeScreen();
    return (
        <div className="grid h-screen lg:grid-cols-12 md:grid-cols-6 xl:mx-32 lg:mx-24">
            <Navbar />
            <Posts />
            {islargescreen ? <ToolSearchBar /> : null}
        </div>
    );
};
