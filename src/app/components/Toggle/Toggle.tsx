import { useTheme } from "next-themes";

const Toggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleChange = () => {
    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  };
  
  return (
    <div className="toggle-container">
      <button onClick={handleChange}>{currentTheme}</button>
    </div>
  );
};

export default Toggle;
