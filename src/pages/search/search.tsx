import { Navbar } from "../home/navbar";
import { SearchBar } from "../../components/searchbar";
import { SearchSection } from "./searchsection";
import { CheckScreenSize } from "../../components/islargescreen";
import { useNavigate } from "react-router-dom";

export const Search = (): JSX.Element => {
    const navigate = useNavigate();
    const isLargeScreen = CheckScreenSize();

    if (isLargeScreen) {
        navigate("/home");
    }

    return (
        <div className="grid h-screen lg:grid-cols-12 md:grid-cols-6 xl:mx-32 lg:mx-24">
            <Navbar />
            <SearchSection />
            {isLargeScreen ? <SearchBar /> : null}
        </div>
    );
};

/*
  ------------------------------------------------------------------
  What wee need to keep working.

  1. make that in the medium view appears the icons at the left side
  2. make that in the small view appears the icons at the bottom 
  3. make shure all works great and well stylized

  ------------------------------------------------------------------
  Improvements

  1. Implement Astro 2.0 
  2. Finish Learn Advanced React
  3. Don't use typescript interfaces

  -------------------------------------------------------------------
  Personal Study
  
  1. Complete the course about Algorithms from ThePrimeagen
  2. Read book: The introduction to Algorithms
  
*/
