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
      <div className={styles.imageContainer}>
        <Image
          src={`/assets/fluent_weather-sunny-${currentTheme}.svg`}
          alt="sun"
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Switch.Root
        className={styles.SwitchRoot}
        id="switcher"
        onCheckedChange={handleChange}
        checked={currentTheme === "dark"}
      >
        <Switch.Thumb className={styles.SwitchThumb} />
      </Switch.Root>
      <div className={styles.imageContainer}>
        <Image
          src={`/assets/fluent_weather-moon-${currentTheme}.svg`}
          alt="moon"
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Toggle;
