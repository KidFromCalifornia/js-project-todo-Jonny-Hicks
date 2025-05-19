✅ Task App Project Plan (Using Zustand + React)
🧠 Goal:
Build a responsive, accessible, and easy-to-use task manager app using Zustand for state management, React components, and clean code.

🗓️ DAY 1 – Plan, Set Up & Display Tasks
Focus: Understand the app structure, create the store, and list tasks on screen.

⏰ Total Time: ~4 hours (includes breaks)

1️⃣ Session 1: Sketch & Plan (60 min)

Why: Planning first prevents confusion later.

Sketch your layout on paper: input field, task list, counter.

Break it into components: TaskList, TaskItem, TaskForm, TaskCounter.

Define a task object:

{
id: string,
text: string,
completed: boolean,
createdAt: string
}
Learn why Zustand helps: No prop drilling → better control of data.

🧘 Break – 10 minutes

2️⃣ Session 2: Set up project + Zustand store (60 min)
Why: Zustand holds your data in one place — like a digital whiteboard.

Create a new React app (npm create vite@latest or CRA).

Install Zustand: npm install zustand

Make a useTaskStore.js file.

Add this basic store:

import { create } from 'zustand';

const useTaskStore = create((set) => ({
tasks: [],
addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
removeTask: (id) => set((state) => ({
tasks: state.tasks.filter((task) => task.id !== id),
})),
}));

export default useTaskStore;
🧘 Break – 10 minutes

3️⃣ Session 3: List tasks on screen (60 min)
Why: Seeing results early helps you understand your app’s flow.

Create TaskList component.

Get tasks from Zustand using:

const tasks = useTaskStore((state) => state.tasks);
For now, hardcode a few tasks in tasks: [...] in the store.

Map over tasks and render them:

tasks.map(task => <li>{task.text}</li>)
💡 End-of-day reflection (15 min):

What worked?

What was tricky?

What do you want to understand better?

🗓️ DAY 2 – Add, Toggle, and Count Tasks
Focus: Add tasks, mark them as completed, and display counters.

⏰ Total Time: ~4 hours
1️⃣ Session 1: Add new task (90 min)
Why: This is how users interact with your app.

Create TaskForm with input + button.

On submit, call addTask() from store.

Use:

const newTask = {
id: crypto.randomUUID(),
text: inputValue,
completed: false,
createdAt: new Date().toISOString()
}
Clear the input after adding a task.

🧘 Break – 10 minutes

2️⃣ Session 2: Toggle task complete/incomplete (60 min)
Why: Interactivity makes it a real to-do app.

Add a checkbox in TaskItem.

In the store, add:

toggleTaskCompleted: (id) =>
set((state) => ({
tasks: state.tasks.map((task) =>
task.id === id ? { ...task, completed: !task.completed } : task
),
})),
Hook checkbox to that function using onChange.

🧘 Break – 10 minutes

3️⃣ Session 3: Count tasks & delete tasks (60 min)
Why: Good UX shows users what’s going on.

Show total tasks and/or uncompleted tasks.

Add a "Delete" button to TaskItem that calls removeTask(id).

Use semantic HTML (like <ul> and <button>).

🗓️ DAY 3 – Accessibility & Responsive Design
Focus: Make the app usable for everyone, on every screen.

⏰ Total Time: ~4 hours
1️⃣ Session 1: Add empty state + accessibility basics (60 min)
Why: UX shouldn’t be confusing when there’s nothing on screen.

If tasks.length === 0, show a friendly message like:

“No tasks yet! Add one above.”

Add alt attributes to all images.

Use buttons, not divs, for actions.

Add aria-labels where needed.

🧘 Break – 10 minutes

2️⃣ Session 2: Make it responsive (90 min)
Why: People use many devices. It should work on all sizes.

Use Flexbox or CSS Grid to organize layout.

Use relative units: %, rem, em, vh, etc.

Test at 320px, 768px, and 1600px screen widths.

🧘 Break – 10 minutes

3️⃣ Session 3: Run Lighthouse audit + clean code pass (60 min)
Why: Ensures accessibility and performance.

Open Chrome → DevTools → Lighthouse tab → Run audit

Fix:

Color contrast

Image sizes

Button labels

Heading order

Refactor messy code (consistent naming, spacing, formatting)

🗓️ DAY 4 – Stretch Goals (Optional or Future)
Focus: Add extra functionality if you feel ready.

⏰ Pick 1–2 features to build (4 hours max)
🌙 Dark/light mode switch (use a state + className)

💾 LocalStorage to save tasks across refreshes

⏰ Add due dates and highlight overdue ones

🧮 Filter by complete/incomplete/dates

🏷️ Tags/categories per task

📂 Project grouping (tasks belong to a project)

🧠 Final Tips for Success
✅ Take breaks every hour
✅ Work in small steps
✅ Say out loud what the code is doing
✅ Use comments to explain logic
✅ Keep testing with keyboard and screen readers
