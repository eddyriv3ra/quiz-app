import QuestionButton from "@/app/components/QuestionButton";
import styles from "./Quiz.module.scss";
import { useSubjectStore } from "@/app/store/useSubjectStore";
import Button from "../Button";
import ProgressBar from "@/app/components/ProgressBar";
import Image from "next/image";
import Badge from "../Badge";

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
    nextQuestion,
    completed,
    playAgain,
  } = useSubjectStore((state) => state);

  const currentQuestion = subject.questions.find(
    (_, index) => index === currentQuestionIndex
  );

  const questions = currentQuestion ? currentQuestion.options : quizzes;

  const onValidateAnswer = () => {
    validateAnswer({ currentAnswer });
  };

  const progressBarWidth = currentQuestionIndex
    ? (currentQuestionIndex * 100) / subject.questions.length
    : 0;
  
  const totalCorrectAnswers = subject.questions.reduce((acc, current) => {
    if (current.correctAnswerSelected) {
      return acc + 1;
    }
    return acc;
  }, 0)

  if (completed) {
    return (
      <div className={styles.quizContainer}>
        <div className={styles.title}>
          <p>Quiz completed</p>
          <p>You scored...</p>
        </div>
        <div className={styles.completedRightContainer}>
          <div className={styles.scoreContainer}>
            <Badge
              icon={subject.icon}
              iconBg={subject.iconBg}
              title={subject.title}
            />
            <div>
              <p className={styles.totalRightAnswers}>{totalCorrectAnswers}</p>
              <p className={styles.totalQuestions}>out of {subject.questions.length}</p>
            </div>
          </div>
          <Button onClick={playAgain}>Play Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quizContainer}>
      <div>
        {currentQuestion ? (
          <div className={styles.leftContainer}>
            <div className={styles.currentQuestionContainer}>
              <div className={styles.subjectPadding}>
                <p className={styles.textDescription}>{`Question ${
                  currentQuestionIndex !== null && currentQuestionIndex + 1
                } of ${subject.questions.length}`}</p>
              </div>
              <p className={styles.question}>{currentQuestion.question}</p>
            </div>
            <ProgressBar progress={progressBarWidth} />
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
                  submittedAnswer: submittedAnswer,
                };

            return <QuestionButton key={option.title || option} {...props} />;
          })}
        </div>
        {currentQuestion ? (
          <div className={styles.buttonQuiz}>
            <Button onClick={submittedAnswer ? nextQuestion : onValidateAnswer}>
              {typeof currentQuestion.correctAnswerSelected === "boolean"
                ? "Next Question"
                : "Submit Answer"}
            </Button>
          </div>
        ) : null}
        {typeof currentAnswer === "string" && currentAnswer.length === 0 ? (
          <div className={styles.noAnswer}>
            <Image
              src="/assets/images/dismiss.svg"
              width={40}
              height={40}
              alt="dismiss"
            />
            <p>Please select an answer</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default QuizSelection;
