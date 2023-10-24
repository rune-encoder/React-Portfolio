export default function ThemeBtn({ darkMode, toggleDarkMode }) {
  return (
    <div className="util-group">
      <button onClick={toggleDarkMode}>{`${darkMode ? `🔅` : `🌙`}`}</button>
    </div>
  );
}
