import { useState, useEffect } from "react";

export default function ThemeBtn() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return <button onClick={toggleDarkMode}>🌙</button>;
}
