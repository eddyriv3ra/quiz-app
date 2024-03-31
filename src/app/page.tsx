"use client";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const NoSSRToggle = dynamic(() => import("./components/Toggle"), { ssr: false });

export default function Home() {
  return (
    <main className={styles.main}>
      <NoSSRToggle />
    </main>
  );
}
