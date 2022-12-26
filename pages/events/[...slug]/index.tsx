import { useRouter } from "next/router";
import React from "react";

export default function FilteredEventsPage() {
  const router = useRouter();
  console.log("filtered events: ", router.query);

  return <div>FilteredEventsPage</div>;
}
