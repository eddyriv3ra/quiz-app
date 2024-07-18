"use client";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import { Rubik } from "next/font/google";
import Quiz from "./components/Quiz";
import { useSubjectStore } from "./store/useSubjectStore";
import Badge from "./components/Badge";

const NoSSRToggle = dynamic(() => import("./components/Toggle"), {
  ssr: false,
});

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  const subject = useSubjectStore((state) => state.subject);
  
  return (
    <main className={`${styles.main} ${rubik.className}`}>
      <div>
        <div className={styles.topContainer}>
          {subject.title ? (
            <Badge
              icon={subject.icon}
              iconBg={subject.iconBg}
              title={subject.title}
            />
          ) : <div />}
          <div className={styles.toggleContainer}>
            <NoSSRToggle />
          </div>
        </div>
        <Quiz />
      </div>
    </main>
  );
}
