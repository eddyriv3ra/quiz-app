import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ disabled, children, onClick }: IButton) => {
  return (
    <button onClick={disabled ? () => null : onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
