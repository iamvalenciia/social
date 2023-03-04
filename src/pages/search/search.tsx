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


/*
  
  when I am in large view (xl and lg) I can't navigate to /searchbar, instead, 
  navigate to the home page, wich is good, is what I am expect.

  The problem to fix:
  When I am in the medium view also I can't navigate to /searchbar, which is not
  what I want.

  ------------------------------------------------------------------
  What wee need to keep working.

  1. make that in the medium view appears the icons at the left side
  2. make that in the small view appears the icons at the bottom 
  3. make shure all works great and well stylized

  ------------------------------------------------------------------
  Improvements

  1. Implement Astro 2.0 
  2. Finish Learn Advanced React

  -------------------------------------------------------------------
  Personal Study
  
  1. Complete the course about Algorithms from ThePrimeagen
  2. Read book: The introduction to Algorithms

*/
