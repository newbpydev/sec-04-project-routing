import Link from "next/link";
import { ReactNode } from "react";

import styles from "./Button.module.css";

interface Props {
  link?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, link, onClick, type }: Props) {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type ? type : "button"}
        className={styles.btn}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
