## 1: How to run

The project is deployed and can be accessed here:

https://habit-tracker-lac-seven.vercel.app/

No additional setup is required. The app runs fully in the browser using localStorage for persistence.

---

## 2. Stack & Design Choices

I chose React with Vite because it provides a fast development environment and a clean component-based structure, which is ideal for interactive UI systems like a habit tracker.

Tailwind CSS (or utility-based styling) was used to speed up UI development and maintain consistent spacing and layout without writing large CSS files.

### Design decisions:

**1. Weekly grid instead of list layout**
I chose a 7-column grid layout to represent days of the week instead of a vertical list.

* This allows users to visually compare habits across the same time period
* It makes progress patterns immediately visible (missed days, streaks, consistency)
* It improves scan speed when multiple habits exist

This directly affects the main habit tracking grid section of the app.

---

**2. Card-based habit rows**
Each habit is placed inside its own card container.

* This prevents visual clutter when many habits are added (3–15+)
* It improves separation between different habit rows
* It creates a clear visual hierarchy between habits and grid data

This affects each individual habit row component.

---

## 3. Responsive & Accessibility

### Responsive behavior:

**On mobile (360px width):**

* Layout stacks vertically for better readability
* Grid compresses but remains usable
* Buttons remain touch-friendly with enough spacing
* Scrolling replaces horizontal crowding

**On desktop (1440px width):**

* Full weekly grid is visible at once
* Increased spacing improves readability
* Multiple habits can be viewed simultaneously without clutter

---

### Accessibility considerations:

* Buttons include hover and active states for clear interaction feedback
* Keyboard navigation is supported in input fields (rename functionality)
* High contrast colors are used for completed states and streak indicators
* Today’s column is visually highlighted for better orientation

---

### What I knowingly skipped:

I did not fully implement ARIA labels for every checkbox cell in the grid.

This was skipped due to time constraints, but would improve screen reader accessibility by explicitly describing each cell (e.g., "Exercise completed on Monday").

---

## 4. AI Usage

I used AI (ChatGPT) in the following areas:

### 1. Project structure planning

I asked for guidance on how to structure a React-based habit tracker (components like HabitRow, HabitForm, WeekNavigator).

---

### 2. Streak calculation logic

AI helped initially design a streak system, but it was limited to weekly tracking.

### What I changed:

I modified the streak logic to calculate a true consecutive-day streak across full history stored in localStorage.

This was necessary because the requirement specified continuous streak tracking, not weekly reset logic.

---

### 3. Debugging setup issues

I used AI to resolve Vite import errors and missing component issues during development.

---

### 4. UI improvement suggestions

AI suggested grid-based layout and card-based design for better information hierarchy, which I implemented in the final UI.

---

## 5. Honest Gap

One part that is not fully polished is advanced accessibility.

While the UI is visually clear and easy to use, it is not fully optimized for screen readers.

### What I would improve with more time:

* Add ARIA labels for each grid cell (e.g., “Exercise completed on Monday”)
* Improve full keyboard navigation across the grid (arrow key movement between cells)
* Add stronger focus indicators for accessibility consistency

