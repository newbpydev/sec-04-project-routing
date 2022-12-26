import { ReactNode } from "react";
import classes from "./logistics-item.module.css";

interface Props {
  icon: () => JSX.Element;
  children: ReactNode;
}

function LogisticsItem(props: Props) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
