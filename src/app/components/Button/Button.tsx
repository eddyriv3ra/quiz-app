import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  children: ReactNode;
  imageSrc: string;
  imageBg: string;
}

const Button = ({ children, imageSrc, imageBg }: IButton) => {
  console.log({imageSrc})
  const style = {
    backgroundImage: `url(assets/icons/${imageSrc}.png), url(assets/icons/${imageBg}.png)`,
  };

  return (
    <button className={styles.buttonContainer} >
      <div className={styles.icon} style={style} />
      <p className={styles.text}>{children}</p>
    </button>
  );
};

export default Button;
