import { create } from "zustand";
import { devtools } from "zustand/middleware";
import data from "../../mocks/data.json";

interface IQuestions {
  question: string;
  options: string[];
  answer: string;
  correctAnswerSelected?: boolean | null;
}

export interface ISubject {
  title: string | null;
  icon?: string | null;
  iconBg?: string | null;
  questions: IQuestions[];
}

interface IQuizzes extends ISubject {
  questions: IQuestions[];
}

interface ISubjectStore {
  subject: ISubject;
  selectSubject: ({ title, icon, iconBg }: ISubject) => void;
  quizzes: IQuizzes[];
  currentQuestionIndex: number | null;
  selectAnswer: ({ currentAnswer }: { currentAnswer: string }) => void;
  currentAnswer: string | null;
  validateAnswer: ({ currentAnswer }: { currentAnswer: string | null }) => void;
  submittedAnswer: string | null;
  nextQuestion: () => void;
}

export const useSubjectStore = create<ISubjectStore>()(
  devtools((set) => ({
    subject: {
      title: null,
      icon: null,
      iconBg: null,
      questions: [],
    },
    quizzes: data.quizzes,
    currentQuestionIndex: null,
    currentAnswer: null,
    submittedAnswer: null,
    selectSubject: ({ title, icon, iconBg, questions }) =>
      set(() => ({
        subject: { title, icon, iconBg, questions },
        currentQuestionIndex: 0,
      })),
    selectAnswer: ({ currentAnswer }) => set(() => ({ currentAnswer })),
    validateAnswer: ({ currentAnswer }) =>
      set((state) => {
        const newQuestions = state.subject.questions.map((value) => {
          if (value.answer === currentAnswer) {
            return {
              ...value,
              correctAnswerSelected: value.answer === currentAnswer,
            };
          }
          return {
            ...value,
          };
        });

        return {
          submittedAnswer: currentAnswer,
          subject: {
            ...state.subject,
            questions: newQuestions,
          },
        };
      }),
    nextQuestion: () =>
      set((state) => ({
        currentAnswer: null,
        submittedAnswer: null,
        currentQuestionIndex: (state.currentQuestionIndex || 0) + 1,
      })),
  }))
);
