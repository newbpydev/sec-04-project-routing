import { Erica_One } from "@next/font/google";
import { useRouter } from "next/router";
import EventList from "../../../components/events/EventList";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/Button";
import ErrorAlert from "../../../components/ui/error-alert";
import { getFilteredEvents } from "../../../dummy-data";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  // @ if no data, lifecycle render, show loading
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // @ check if there is a problem with the filter
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  // * render if there is an event on the date
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
