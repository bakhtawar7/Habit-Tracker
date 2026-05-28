import { useState } from "react";
import { formatDate, isToday } from "../utils/dateUtils";
import { calculateStreak } from "../utils/streakUtils";

export default function HabitRow({
  habit,
  weekDays,
  completions,
  toggleCompletion,
  deleteHabit,
  renameHabit
}) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(habit.name);

  const streak = calculateStreak(habit.id, completions);

  function saveEdit() {
    if (text.trim()) {
      renameHabit(habit.id, text);
    }
    setEdit(false);
  }

  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">

        {/* NAME / EDIT FIELD */}
        {edit ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            className="border px-3 py-1 rounded-lg w-full mr-3"
            autoFocus
          />
        ) : (
          <div
            onDoubleClick={() => setEdit(true)}
            className="font-semibold text-lg text-indigo-700 cursor-pointer hover:text-indigo-900 transition"
            title="Double click OR click edit"
          >
            {habit.name}
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex items-center gap-2">

          {/* ✏️ EDIT BUTTON (THIS FIXES YOUR ISSUE) */}
          {!edit && (
            <button
              onClick={() => setEdit(true)}
              className="text-indigo-600 text-lg hover:scale-110 transition"
              title="Rename habit"
            >
              ✏️
            </button>
          )}

          {/* STREAK */}
          <div className="text-sm px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
            🔥 {streak}
          </div>

          {/* DELETE */}
          <button
            onClick={() => deleteHabit(habit.id)}
            className="text-red-500 text-sm hover:scale-110 transition"
          >
            Delete
          </button>

        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => {
          const key = formatDate(day);
          const checked = completions?.[habit.id]?.[key];

          return (
            <button
              key={key}
              onClick={() => toggleCompletion(habit.id, key)}
              className={`
                w-11 h-11 rounded-xl border flex items-center justify-center
                transition-all duration-200 hover:scale-110 active:scale-90

                ${checked ? "bg-emerald-500 text-white border-emerald-500 shadow-md" : "bg-white"}
                ${isToday(day) ? "border-indigo-500 ring-2 ring-indigo-100" : "border-gray-200"}
              `}
            >
              {checked ? "✓" : ""}
            </button>
          );
        })}
      </div>

    </div>
  );
}