import QuestionButton from "@/app/components/QuestionButton";
import styles from "./QuizSelection.module.scss";
import { useSubjectStore } from "@/app/store/useSubjectStore";
import Button from "../Button";

function QuizSelection() {
  const {
    selectSubject,
    subject,
    quizzes,
    currentQuestionIndex,
    selectAnswer,
    currentAnswer,
    validateAnswer,
    submittedAnswer,
  } = useSubjectStore((state) => state);

  const currentQuestion = subject.questions.find(
    (_, index) => index === currentQuestionIndex
  );

  const questions = currentQuestion ? currentQuestion.options : quizzes;

  const onValidateAnswer = () => {
    validateAnswer({ currentAnswer });
  };

  return (
    <div className={styles.quizContainer}>
      <div>
        {currentQuestion ? (
          <div className={styles.currentQuestionContainer}>
            <div className={styles.subjectPadding}>
              <p className={styles.textDescription}>{`Question ${
                currentQuestionIndex !== null && currentQuestionIndex + 1
              } of ${subject.questions.length}`}</p>
            </div>
            <p className={styles.question}>{currentQuestion.question}</p>
          </div>
        ) : (
          <>
            <div className={styles.title}>
              <p>Welcome to the</p>
              <p>Frontend Quiz!</p>
            </div>
            <p
              className={`${(styles.textDescription, styles.noSubjectPadding)}`}
            >
              Pick a subject to get started.
            </p>
          </>
        )}
      </div>
      <div>
        <div className={styles.questionsContainer}>
          {questions.map((option: any, index: number) => {
            const props = !currentQuestion
              ? {
                  title: option.title,
                  icon: option.icon,
                  iconBg: option.iconBg,
                  onClick: () =>
                    selectSubject({
                      title: option.title,
                      icon: option.icon,
                      iconBg: option.iconBg,
                      questions: option.questions,
                    }),
                }
              : {
                  title: option,
                  index: index,
                  disabled: typeof submittedAnswer === "string",
                  isCorrectAnswer:
                    submittedAnswer === option
                      ? currentQuestion.answer === submittedAnswer
                      : null,
                  answer: currentQuestion.answer,
                  onClick: () => selectAnswer({ currentAnswer: option }),
                };

            return <QuestionButton key={option.title || option} {...props} />;
          })}
        </div>
        {currentQuestion ? (
          <Button
            disabled={
              (typeof currentAnswer === "string" &&
                typeof currentQuestion.correctAnswerSelected === "boolean") ||
              currentAnswer === null
            }
            onClick={onValidateAnswer}
          >
            {typeof currentQuestion.correctAnswerSelected === "boolean"
              ? "Next Question"
              : currentAnswer
              ? "Submit Answer"
              : "Select Answer"}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default QuizSelection;
