import Link from "next/link";
import { ReactNode } from "react";

import styles from "./Button.module.css";

interface Props {
  link: string;
  children: ReactNode;
}

export default function Button({ children, link }: Props) {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}
