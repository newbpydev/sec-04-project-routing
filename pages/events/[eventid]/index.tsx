import React from "react";
import { useRouter } from "next/router";

export default function EventDetailPage() {
  const router = useRouter();
  console.log("event detail: ", router.query);

  return <div>EventDetailPage</div>;
}
