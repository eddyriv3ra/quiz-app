"use client";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import { Rubik } from "next/font/google";
import subjects from "../mocks/subjects.json";
import Button from "./components/Button";

const NoSSRToggle = dynamic(() => import("./components/Toggle"), {
  ssr: false,
});

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} ${rubik.className}`}>
      <div>
        <div className={styles.toggleContainer}>
          <NoSSRToggle />
        </div>
        <div className={styles.quizContainer}>
          <div>
            <div className={styles.title}>
              <p>Welcome to the</p>
              <p>Frontend Quiz!</p>
            </div>
            <p className={styles.textDescription}>
              Pick a subject to get started.
            </p>
          </div>
          <div className={styles.rightContainer}>
            {subjects.map(({ id, value, imageSrc, imageBgSrc }) => {
              return (
                <Button key={id} imageSrc={imageSrc} imageBg={imageBgSrc}>
                  {value}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
