import React, { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./landingpage"; // ✅ import here

export default function App() {
  const [animateToNav, setAnimateToNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const toNavTimer = setTimeout(() => {
      setAnimateToNav(true);
    }, 2000);

    const navTimer = setTimeout(() => {
      setShowNavbar(true);
    }, 4000);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 4200);

    return () => {
      clearTimeout(toNavTimer);
      clearTimeout(navTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Logo Animation */}
      <h1
        className={`absolute font-extrabold text-6xl transition-all duration-1000 ease-in-out
          ${animateToNav
            ? "top-5 left-8 text-xl"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-text-pop"
          }`}
      >
        Adjunct
      </h1>

      {/* Navbar */}
      {showNavbar && (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gray-900/50 backdrop-blur-lg">
          <h1 className="text-xl font-bold">Adjunct</h1>
          <ul className="flex gap-6 text-sm">
            <li className="hover:text-indigo-400 cursor-pointer">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer">Features</li>
            <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
          </ul>
        </nav>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="fade-in">
          <HeroSection /> {/* ✅ Added here */}
        </div>
      )}
    </div>
  );
}
