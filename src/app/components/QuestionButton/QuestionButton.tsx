import React, { ReactNode } from "react";
import styles from "./QuestionButton.module.scss";

interface IQuestionButton {
  title: string;
  imageSrc: string;
  imageBg: string;
  onClick: () => void;
}

const QuestionButton = ({ title, imageSrc, imageBg, onClick }: IQuestionButton) => {
  const style = {
    backgroundImage: `url(assets/images/${imageSrc}), url(assets/images/${imageBg})`,
  };

  return (
    <button className={styles.buttonContainer} onClick={onClick}>
      <div className={styles.icon} style={style} />
      <p className={styles.text}>{title}</p>
    </button>
  );
};

export default QuestionButton;
