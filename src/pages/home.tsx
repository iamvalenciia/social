import {Navbar} from "../components/navbar";

export const Home = (): JSX.Element => {

    return (
        <div>
            <Navbar/>
            <div>
                <p>Here are the posts of users</p>
            </div>
        </div>
    )
}