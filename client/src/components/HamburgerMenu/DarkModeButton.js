import { useState, useEffect } from "react";

export default function DarkModeButton() {

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
    <button className="" onClick={handleDarkMode}>
      <p>
    Light Mode - Dark Mode
      </p>
    </button>
  );
}
