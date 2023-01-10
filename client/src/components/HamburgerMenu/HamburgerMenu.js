import { useState, useEffect } from "react";

export default function HamburgerMenu() {

  const [ darkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem("darkMode")))

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else if (!darkMode) {
      document.body.classList.remove('dark')
    }
  },[darkMode])

  const handleDarkMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode))
    setDarkMode((current) => !current)
  };

  return (
    //placeholder to test dark mode
    <button className="" onClick={handleDarkMode}>
      <svg
        className="fill-base-dark dark:fill-gray-light"
        viewBox="0 0 100 80"
        width="25"
        height="25"
      >
        <rect width="100" height="12.5" rx="10"></rect>
        <rect y="30" width="100" height="12.5" rx="10"></rect>
        <rect y="60" width="100" height="12.5" rx="10"></rect>
      </svg>
    </button>
  );
}
