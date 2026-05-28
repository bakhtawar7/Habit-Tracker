export default function WeekNavigator({ previousWeek, nextWeek, resetWeek }) {
  return (
    <div className="flex gap-2 mb-6">

      <button onClick={previousWeek} className="px-4 py-2 border rounded-xl hover:bg-gray-50">
        ← Prev
      </button>

      <button onClick={resetWeek} className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
        Today
      </button>

      <button onClick={nextWeek} className="px-4 py-2 border rounded-xl hover:bg-gray-50">
        Next →
      </button>

    </div>
  );
}