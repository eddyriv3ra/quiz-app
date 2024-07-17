import Image from "next/image";
import styles from "./QuestionButton.module.scss";
import { ISubject, useSubjectStore } from "@/app/store/useSubjectStore";

export interface IQuestionButton extends Omit<ISubject, "questions"> {
  onClick: () => void;
  index?: number;
  disabled?: boolean;
  isCorrectAnswer?: boolean | null;
  answer?: string;
}

interface IStringObj {
  [index: number]: string;
}

const questionIndex: IStringObj = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};

const QuestionButton = ({
  title,
  icon,
  iconBg,
  index = 0,
  onClick,
  disabled,
  isCorrectAnswer = null,
  answer,
}: IQuestionButton) => {
  const { currentAnswer } = useSubjectStore(({ currentAnswer }) => ({
    currentAnswer,
  }));
  const style = {
    backgroundImage: `url(assets/images/${icon}), url(assets/images/${iconBg})`,
  };

  const answerIcon = isCorrectAnswer ? "checkmark" : "dismiss";

  return (
    <button
      className={`${styles.buttonContainer} ${
        currentAnswer === title
          ? styles.selectedAnswer
          : styles.buttonContainerHover
      } ${
        isCorrectAnswer === null
          ? ""
          : isCorrectAnswer
          ? styles.isRightAnswer
          : styles.isWrongAnswer
      }`}
      onClick={disabled ? () => null : onClick}
    >
      {icon && iconBg ? (
        <>
          <div className={styles.icon} style={style} />
          <p className={styles.text}>{title}</p>
        </>
      ) : (
        <>
          <div
            className={`${styles.icon} ${styles.noImageBg} ${
              currentAnswer === title ? styles.noImageBgSelected : ""
            } `}
          >
            <p className={styles.index}>{questionIndex[index + 1]}</p>
          </div>
          <p className={styles.text}>{title}</p>
          {isCorrectAnswer === null ? null : (
            <Image
              src={`/assets/images/${answerIcon}.svg`}
              width={40}
              height={40}
              alt={answerIcon}
            />
          )}
        </>
      )}
    </button>
  );
};

export default QuestionButton;
