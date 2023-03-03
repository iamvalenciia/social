import { SearchBar } from "../../components/searchbar";


export const SearchSection = (): JSX.Element => {
    return (
      <div className="md:col-span-4 lg:col-span-6 lg:w-full relative inline-block">
          <div className="text-center py-4 text-2xl bg-gray-200 bg-opacity-70 backdrop-filter backdrop-blur-sm">
              <SearchBar/>
          </div>
      </div>
    );
  };
  