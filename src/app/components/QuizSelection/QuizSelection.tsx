import QuestionButton from "@/app/components/QuestionButton";
import data from "../../../mocks/data.json";
import styles from "./QuizSelection.module.scss";
import { useSubjectStore } from "@/app/store/useSubjectStore";

function QuizSelection() {
  const { selectSubject, subject } = useSubjectStore(
    ({ selectSubject, subject }) => ({ selectSubject, subject })
  );

  return (
    <div className={styles.quizContainer}>
      <div>
        <div className={styles.title}>
          <p>Welcome to the</p>
          <p>Frontend Quiz!</p>
        </div>
        <p className={styles.textDescription}>Pick a subject to get started.</p>
      </div>
      <div className={styles.questionsContainer}>
        {data.quizzes.map(({ title, icon, iconBg }) => {
          return (
            <QuestionButton
              key={title}
              imageSrc={icon}
              imageBg={iconBg}
              title={title}
              onClick={() => selectSubject({ value: title, icon, iconBg })}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuizSelection;
