import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";

// import styles from

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />

      <EventList items={events} />
    </>
  );
}
