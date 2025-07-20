"use client"

import { useEffect } from "react";
import SwimLane from "./components/SwimLane";
import { useSwimlaneStore } from "./redux/swimLaneStore";

export default function Home() {

  const { lanes, loading, error, fetchLanes } = useSwimlaneStore();

  useEffect(() => {
    fetchLanes();
  }, [fetchLanes]);

  console.log('testo', lanes)

  const array = [1, 2, 3, 4]

  return (
    <div className="flex w-full h-screen">
      {lanes.filter((lane, index, self) =>
        index === self.findIndex((t) => (t.status_id === lane.status_id))
      ).map(lane => (
        <SwimLane key={lane.status_id} title={lane.main_status} />
      ))}
    </div>
  );
}
