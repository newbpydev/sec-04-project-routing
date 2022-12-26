import { useRouter } from "next/router";
import EventContent from "../../../components/event-detail/event-content";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventSummary from "../../../components/event-detail/event-summary";
import { Event, getEventById } from "../../../dummy-data";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  let event: Event | undefined;
  console.log(typeof eventId);

  if (typeof eventId === "string") event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />

      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
