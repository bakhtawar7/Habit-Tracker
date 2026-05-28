import { useState } from "react";

export default function HabitForm({ addHabit }) {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    addHabit(text);
    setText("");
  }

  return (
    <form onSubmit={submit} className="flex gap-2 mb-6 bg-white p-4 rounded-2xl shadow-sm border">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g. Read 30 minutes"
        className="flex-1 border p-3 rounded-xl outline-none"
      />

      <button className="bg-indigo-600 text-white px-5 rounded-xl hover:bg-indigo-700 transition">
        Add
      </button>
    </form>
  );
}