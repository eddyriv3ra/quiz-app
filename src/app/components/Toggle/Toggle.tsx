import { useTheme } from "next-themes";
import * as Switch from "@radix-ui/react-switch";
import styles from "./Toggle.module.scss";
import Image from "next/image";

const Toggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleChange = () => {
    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="toggle-container">
      <Image
        src={"/assets/fluent_weather-sunny-16-regular.svg"}
        width={24}
        height={24}
        alt="moon"
      />
      <Switch.Root
        className={styles.SwitchRoot}
        id="switcher"
        onCheckedChange={handleChange}
        checked={currentTheme === "dark"}
      >
        <Switch.Thumb className={styles.SwitchThumb} />
      </Switch.Root>
      <Image
        src={"/assets/fluent_weather-moon-16-regular.svg"}
        width={24}
        height={24}
        alt="moon"
      />
    </div>
  );
};

export default Toggle;
