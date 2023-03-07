import { useState } from "react";
import { IconBxSearch } from "./icons";

export const SearchBar = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [isInputClicked, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with the query
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleInputClick = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className=" lg:inline-block col-span-3 items-start relative border-2 border-gray-200">
      <div className="px-4 sticky top-2">
        <form
          onSubmit={handleSearch}
          className={`flex text-gray-900 border-2 rounded-full bg-gray-200 my-2 
        ${isInputClicked ? "border-gray-400" : "border-gray-200"}`}
        >
          <button type="submit" className="mx-3" title="search button">
            <IconBxSearch className="h-5 w-5 stroke-gray-900" />
          </button>
          <input
            type="search"
            name="search"
            placeholder="Search"
            value={query}
            onChange={handleQueryChange}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
            className="bg-gray-200 rounded-full outline-none text-sm py-3 w-full"
          />
        </form>
      </div>
    </div>
  );
};
