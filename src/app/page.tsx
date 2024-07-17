"use client";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import { Rubik } from "next/font/google";
import QuizSelection from "./components/Quiz";
import { useSubjectStore } from "./store/useSubjectStore";

const NoSSRToggle = dynamic(() => import("./components/Toggle"), {
  ssr: false,
});

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  const subject = useSubjectStore((state) => state.subject);
  const style = {
    backgroundImage: `url(assets/images/${subject.icon}), url(assets/images/${subject.iconBg})`,
  };

  return (
    <main className={`${styles.main} ${rubik.className}`}>
      <div>
        <div className={styles.topContainer}>
          <div className={styles.selectedSubject}>
            {subject.title ? (
              <>
                <div className={styles.icon} style={style} />
                <p>{subject.title}</p>
              </>
            ) : null}
          </div>
          <div className={styles.toggleContainer}>
            <NoSSRToggle />
          </div>
        </div>
        <QuizSelection />
      </div>
    </main>
  );
}
