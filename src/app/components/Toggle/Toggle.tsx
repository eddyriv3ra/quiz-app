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
    <div className={styles.toggleContainer}>
      <Image
        src={`/assets/fluent_weather-sunny-${currentTheme}.svg`}
        width={24}
        height={24}
        alt="sun"
        priority
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
        src={`/assets/fluent_weather-moon-${currentTheme}.svg`}
        width={24}
        height={24}
        alt="moon"
        priority
      />
    </div>
  );
};

export default Toggle;
