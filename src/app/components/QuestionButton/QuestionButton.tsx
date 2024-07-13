import React, { ReactNode } from "react";
import styles from "./QuestionButton.module.scss";

interface IQuestionButton {
  children: ReactNode;
  imageSrc: string;
  imageBg: string;
}

const QuestionButton = ({ children, imageSrc, imageBg }: IQuestionButton) => {
  const style = {
    backgroundImage: `url(assets/images/${imageSrc}), url(assets/images/${imageBg})`,
  };

  return (
    <button className={styles.buttonContainer} >
      <div className={styles.icon} style={style} />
      <p className={styles.text}>{children}</p>
    </button>
  );
};

export default QuestionButton;
