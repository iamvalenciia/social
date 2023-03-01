import {Navbar} from "./navbar";
import {Infobar} from "./infobar";
import {Posts} from "./posts";

export const Home = (): JSX.Element => {

    return (
        <div className="grid h-screen lg:grid-cols-12 md:grid-cols-6 lg:mr-40 lg:ml-40 bg-gray-100 ">
            <Navbar/>
            <Posts/>
            <Infobar/>
        </div>
    )
}