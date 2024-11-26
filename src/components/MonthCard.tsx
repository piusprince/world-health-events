import React from "react";
import { Calendar } from "lucide-react";
import { HealthEvent } from "../types";

interface MonthCardProps {
  month: string;
  events: HealthEvent[];
  onEventClick: React.Dispatch<React.SetStateAction<HealthEvent | null>>;
}

const MonthCard: React.FC<MonthCardProps> = ({
  month,
  events,
  onEventClick,
}) => {
  const getMonthColor = (month: string) => {
    const colors = {
      January: "bg-blue-500",
      February: "bg-pink-500",
      March: "bg-green-500",
      April: "bg-yellow-500",
      May: "bg-purple-500",
      June: "bg-orange-500",
      July: "bg-red-500",
      August: "bg-indigo-500",
      September: "bg-teal-500",
      October: "bg-amber-500",
      November: "bg-cyan-500",
      December: "bg-emerald-500",
    };
    return colors[month as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
      <div
        className={`${getMonthColor(
          month
        )} px-4 py-3 flex items-center justify-between`}
      >
        <h2 className="text-lg font-semibold text-white">{month}</h2>
        <Calendar className="w-5 h-5 text-white opacity-75" />
      </div>
      <div className="p-4">
        <ul className="space-y-3">
          {events.map((event, index) => (
            <li
              key={index}
              onClick={() => onEventClick(event)}
              className="p-2 transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-50"
            >
              <p className="text-sm font-medium text-gray-800">{event.name}</p>
              <p className="mt-1 text-xs text-gray-500">{event.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MonthCard;
