import React from "react";
import styles from "./Badge.module.scss";

interface IBadge {
  icon?: string | null;
  iconBg?: string | null;
  title: string | null;
}

function Badge({ icon, iconBg, title }: IBadge) {
  const style = {
    backgroundImage: `url(assets/images/${icon}), url(assets/images/${iconBg})`,
  };

  return (
    <div className={styles.selectedSubject}>
      <div className={styles.icon} style={style} />
      <p>{title}</p>
    </div>
  );
}

export default Badge;
