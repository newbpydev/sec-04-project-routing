import Image from "next/image";
import Link from "next/link";
import { Event } from "../../dummy-data";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

import styles from "./EventItem.module.css";

interface Props {
  event: Event;
}

export default function EventItem({ event }: Props) {
  const { id, date, description, image, title, location, isFeatured } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image
        src={"/" + image}
        alt={title}
        title={title}
        width={100}
        height={100}
      />

      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>

          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>

          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Link</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
