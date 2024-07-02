"use client";

import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
