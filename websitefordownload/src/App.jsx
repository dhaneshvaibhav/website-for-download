import React, { useEffect, useState } from "react";
import "./App.css";
import LightRays from "./LightRays/LightRays";
import { createClient } from '@supabase/supabase-js';

export default function App() {
  const [animateToNav, setAnimateToNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const client = createClient(
    "https://hwkwretkfwcmuamhfjni.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3a3dyZXRrZndjbXVhbWhmam5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExODUwMDcsImV4cCI6MjA2Njc2MTAwN30.hxG3HiTEXsJoB8fMkbQi0OiNQeMBjtAA-gdJD-aMqxc"
  );

  const handlesubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted!");
    const {error} = await client.from("user_data").insert({
      name: formData.name, 
      email: formData.email
    });
    if (error) {
      console.error("Error inserting data:", error);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

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

  // Theme-based styles
  const themeStyles = {
    background: isDarkTheme ? 'bg-gray-950' : 'bg-gray-50',
    text: isDarkTheme ? 'text-white' : 'text-gray-900',
    navText: isDarkTheme ? 'text-white' : 'text-gray-900',
    navHover: isDarkTheme ? 'hover:text-indigo-400' : 'hover:text-indigo-600',
    gradient: isDarkTheme ? 'from-transparent via-gray-950/20 to-gray-900/40' : 'from-transparent via-gray-50/20 to-gray-100/40',
    subtext: isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    formBg: isDarkTheme ? 'bg-gray-800/70' : 'bg-white/80',
    formBorder: isDarkTheme ? 'border-gray-600/50' : 'border-gray-300/50',
    inputBg: isDarkTheme ? 'bg-gray-700' : 'bg-white',
    inputBorder: isDarkTheme ? 'border-gray-600' : 'border-gray-300',
    inputText: isDarkTheme ? 'text-white' : 'text-gray-900',
    placeholder: isDarkTheme ? 'placeholder-gray-400' : 'placeholder-gray-500',
    dropShadow: isDarkTheme ? 'drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]' : 'drop-shadow-[0_0_20px_rgba(0,0,0,0.3)]',
    toggleBg: isDarkTheme ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white/20 hover:bg-white/30'
  };

  return (
    <div className={`min-h-screen ${themeStyles.background} ${themeStyles.text} relative overflow-hidden transition-colors duration-500`}>
      {/* Logo Animation */}
      <h1
        className={`absolute font-extrabold text-6xl transition-all duration-1000 ease-in-out z-20
          ${animateToNav
            ? "top-5 left-8 text-xl"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-text-pop"
          }`}
      >
        Adjunct
      </h1>

      {/* Navbar */}
      {showNavbar && (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-10 transition-colors duration-500">
          <div></div> {/* Spacer for logo */}
          <div className="flex items-center gap-6">
            <ul className="flex gap-6 text-sm">
              <li className={`${themeStyles.navText} ${themeStyles.navHover} cursor-pointer transition-colors`}>Home</li>
              <li className={`${themeStyles.navText} ${themeStyles.navHover} cursor-pointer transition-colors`}>Features</li>
              <li className={`${themeStyles.navText} ${themeStyles.navHover} cursor-pointer transition-colors`}>Contact</li>
            </ul>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2 rounded-full ${themeStyles.toggleBg} backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:scale-105`}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? (
                <svg className="w-5 h-5 text-yellow-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </nav>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="fade-in relative w-full h-screen">
          {/* LightRays Background */}
          <div className="absolute inset-0 z-0">
            <LightRays
              raysOrigin="top-center"
              raysColor={isDarkTheme ? "#ffffff" : "#000000"}
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={false}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
          
          {/* Content Layer */}
          <div className={`relative z-10 min-h-screen flex justify-between items-center px-8 md:px-32 bg-gradient-to-b ${themeStyles.gradient} transition-all duration-500`}>
            {/* Left Side - Main Content */}
            <div className="flex flex-col justify-center items-start max-w-2xl">
              {/* Headline */}
              <h1 className={`text-5xl md:text-6xl font-extrabold mb-4 leading-tight ${themeStyles.text} ${themeStyles.dropShadow} transition-all duration-500`}>
                ADJUNCT<br /> Human Intelligence,
                AI Precision,
                Perfectly Fused.
              </h1>

              {/* Subtext */}
              <p className={`text-lg md:text-xl ${themeStyles.subtext} mb-8 transition-colors duration-500`}>
                A Personal Assistant developed to help you with your daily tasks.
              </p>

              {/* Button */}
              <button 
                className="bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl" 
                onClick={() => setClicked(true)}
              >
                Download now
                <span className="text-xl font-bold">→</span>
              </button>
            </div>

            {/* Right Side - Form */}
            {clicked && (
              <div className="w-full max-w-md ml-8 animate-fade-in relative">
                <form onSubmit={handlesubmit} className={`flex flex-col space-y-4 ${themeStyles.formBg} backdrop-blur-lg p-6 rounded-lg border ${themeStyles.formBorder} transition-all duration-500`}>
                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setClicked(false)}
                    className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg`}
                    aria-label="Close form"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <h3 className={`text-xl font-semibold mb-4 text-center ${themeStyles.text} transition-colors duration-500`}>Get Early Access</h3>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`p-3 border ${themeStyles.inputBorder} rounded-lg ${themeStyles.inputBg} ${themeStyles.inputText} ${themeStyles.placeholder} focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300`}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`p-3 border ${themeStyles.inputBorder} rounded-lg ${themeStyles.inputBg} ${themeStyles.inputText} ${themeStyles.placeholder} focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300`}
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}