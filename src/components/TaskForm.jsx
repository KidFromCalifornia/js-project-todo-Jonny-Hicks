import { useState } from "react";
import useTaskStore from "../useTaskStore";

function TaskForm() {
  const [inputValue, setInputValue] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addTask({
      id: crypto.randomUUID(),
      text: inputValue,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be finished?"
        aria-label="Add a new task"
      />
      <button type="submit">Morning</button>
      <button type="submit">Afternoon</button>
      <button type="submit">Evening</button>
    </form>
  );
}

export default TaskForm;
