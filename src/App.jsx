import { useEffect, useState } from "react";

import HabitForm from "./components/HabitForm";
import HabitRow from "./components/HabitRow";
import WeekNavigator from "./components/WeekNavigator";
import EmptyState from "./components/EmptyState";

import { getStartOfWeek, getWeekDays } from "./utils/dateUtils";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [completions, setCompletions] = useState({});
  const [week, setWeek] = useState(() => getStartOfWeek(new Date()));

  // LOAD
  useEffect(() => {
    const h = localStorage.getItem("habits");
    const c = localStorage.getItem("completions");

    if (h) setHabits(JSON.parse(h));
    if (c) setCompletions(JSON.parse(c));
  }, []);

  // SAVE
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
    localStorage.setItem("completions", JSON.stringify(completions));
  }, [habits, completions]);

  function addHabit(name) {
    if (!name.trim()) return;
    setHabits((prev) => [...prev, { id: Date.now(), name }]);
  }

  function deleteHabit(id) {
    setHabits((prev) => prev.filter((h) => h.id !== id));

    setCompletions((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }

  function renameHabit(id, newName) {
    if (!newName.trim()) return;

    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, name: newName } : h))
    );
  }

  function toggleCompletion(id, date) {
    setCompletions((prev) => {
      const copy = { ...prev };
      if (!copy[id]) copy[id] = {};
      copy[id][date] = !copy[id][date];
      return copy;
    });
  }

  const weekDays = getWeekDays(week);

  return (
    <div className="min-h-screen px-4 py-12 flex justify-center bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <div className="w-full max-w-5xl animate-fadeIn">

        <h1 className="text-4xl font-bold text-indigo-700">
          Habit Tracker
        </h1>

        <p className="text-gray-500 mb-6">
          Build consistency one day at a time
        </p>

        <HabitForm addHabit={addHabit} />

        <WeekNavigator
          previousWeek={() =>
            setWeek(new Date(week.getTime() - 7 * 86400000))
          }
          nextWeek={() =>
            setWeek(new Date(week.getTime() + 7 * 86400000))
          }
          resetWeek={() => setWeek(getStartOfWeek(new Date()))}
        />

        {habits.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-4">
            {habits.map((habit) => (
              <HabitRow
                key={habit.id}
                habit={habit}
                weekDays={weekDays}
                completions={completions}
                toggleCompletion={toggleCompletion}
                deleteHabit={deleteHabit}
                renameHabit={renameHabit}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}