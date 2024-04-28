"use client";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import { Rubik } from 'next/font/google'

const NoSSRToggle = dynamic(() => import("./components/Toggle"), { ssr: false });

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${rubik.className}`}>
      <NoSSRToggle />
    </main>
  );
}
