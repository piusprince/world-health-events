import { useState } from "react";
import { Calendar, Heart, Info } from "lucide-react";
import MonthCard from "./components/MonthCard";
import EventModal from "./components/EventModal";
import { healthEvents } from "./data/healthEvents";
import { HealthEvent } from "./types";

function App() {
  const [selectedEvent, setSelectedEvent] = useState<null | HealthEvent>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-rose-500" />
              <h1 className="text-2xl font-bold text-gray-900">
                World Health Awareness Calendar
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>2024 Health Observances</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Object.entries(healthEvents).map(([month, events]) => (
            <MonthCard
              key={month}
              month={month}
              events={events}
              onEventClick={setSelectedEvent}
            />
          ))}
        </div>
      </main>

      <footer className="mt-12 bg-white border-t border-gray-200">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Info className="w-5 h-5" />
            <p className="text-sm">
              Data sourced from World Health Organization and international
              health organizations
            </p>
          </div>
        </div>
      </footer>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default App;
