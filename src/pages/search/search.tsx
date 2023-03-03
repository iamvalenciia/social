import { useState, useEffect } from "react";
import { Navbar } from "../home/navbar";
import { SearchBar } from "../../components/searchbar";
import { SearchSection } from "./searchsection";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router-dom";

export const Search = (): JSX.Element => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 1024);
    };
    // Check for medium screen size on mount and resize
    handleResize();
    window.addEventListener('resize', handleResize);
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (navigate && isMediumScreen) {
      navigate("/searchbar");
    } else if (navigate && !isMediumScreen) {
      navigate("/");
    }
  }, [isMediumScreen, navigate]);

  return (
    <div className="grid h-screen lg:grid-cols-12 md:grid-cols-6 xl:mx-32 lg:mx-24">
      <Navbar />
      <SearchSection />
      {/* Render SearchBar only on medium screens */}
      {isMediumScreen && <SearchBar />}
    </div>
  );
};
