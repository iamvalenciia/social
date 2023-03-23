import { SearchBar } from "./toolSearchBar";


export const SearchSection = (): JSX.Element => {
    return (
        <div className="col-span-4">
            <div className="text-center text-2xl backdrop-filter backdrop-blur-sm">
                <SearchBar />
            </div>
        </div>
    );
};

