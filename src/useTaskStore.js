import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    {
      id: "1",
      text: "Sample task 1",
      completed: false,
      createdAt: "2024-06-01T10:00:00.000Z",
    },
    {
      id: "2",
      text: "Sample task 2",
      completed: true,
      createdAt: "2024-06-01T11:00:00.000Z",
    },
  ],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  toggleTaskCompleted: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTaskStore;
