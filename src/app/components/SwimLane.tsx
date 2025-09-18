import { Plus } from "lucide-react";
import React from "react";

interface SwimLaneProps {
  title: string;
  status: number;
}
const SwimLane = ({ title, status }: SwimLaneProps) => {
  const getBackgroundTitleColor = (id: number): string => {
    let color = "bg-amber-900";
    switch (id) {
      case 1:
        color = "bg-gray-500";
        break;
      case 2:
        color = "bg-orange-500";
        break;
      case 3:
        color = "bg-green-500";
        break;
      case 4:
        color = "bg-red-500 text-amber-50";
        break;
      default:
        color = "bg-amber-900";
    }

    return color;
  };
  return (
    // <div className='w-[300px] min-h-screen bg-white border rounded shadow'>SwimLane</div>
    <div className="flex-1 min-h-screen bg-white border border-r-0 border-gray-400 last:border-r-0">
      <div className="flex w-full border-b border-gray-400 h-auto justify-between items-center">
        <div
          className={
            getBackgroundTitleColor(status) +
            " m-2 rounded-xl min-w-2/5 text-center"
          }
        >
          <h1 className="p-1.5">{title}</h1>
        </div>
        <div className="flex m-2">
          <Plus size={20} className="m-1" />
          <p>...</p>
        </div>
      </div>
    </div>
  );
};

export default SwimLane;
