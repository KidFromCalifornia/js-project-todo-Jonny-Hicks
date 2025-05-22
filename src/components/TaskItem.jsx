import useTaskStore from "../useTaskStore";

function TaskItem({ task }) {
  const toggleTaskCompleted = useTaskStore(
    (state) => state.toggleTaskCompleted
  );
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompleted(task.id)}
          aria-label={`Mark ${task.text} as ${
            task.completed ? "incomplete" : "complete"
          }`}
        />
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
      </label>
      <button
        onClick={() => removeTask(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        <Remove></Remove>
      </button>
    </li>
  );
}

export default TaskItem;
