import { Navbar } from "./navbar";
import { SearchBar } from "../../components/searchbar";
import { Posts } from "./posts";
import { CheckScreenSize } from "../../components/islargescreen";

export const Home = (): JSX.Element => {
    const islargescreen = CheckScreenSize();
    return (
        <div className="grid h-screen lg:grid-cols-12 md:grid-cols-6 xl:mx-32 lg:mx-24">
            <Navbar />
            <Posts />
            {islargescreen ? <SearchBar /> : null}
        </div>
    );
};
