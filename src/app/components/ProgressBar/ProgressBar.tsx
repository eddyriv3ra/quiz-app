import styles from "./ProgressBar.module.scss";

interface IProgressBar {
  progress: number;
}

function ProgressBar({ progress }: IProgressBar) {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
