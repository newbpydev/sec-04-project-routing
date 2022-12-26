import { Event } from "../../dummy-data";
import EventItem from "./EventItem";

import styles from "./EventList.module.css";

interface Props {
  items: Event[];
}

export default function EventList({ items }: Props) {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
