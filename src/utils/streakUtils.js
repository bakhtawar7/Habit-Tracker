import { formatDate } from "./dateUtils";

/**
 * REAL consecutive day streak (not weekly)
 */
export function calculateStreak(habitId, completions) {
  const data = completions?.[habitId] || {};

  let streak = 0;
  let current = new Date();

  for (let i = 0; i < 365; i++) {
    const key = formatDate(current);

    if (data[key]) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}