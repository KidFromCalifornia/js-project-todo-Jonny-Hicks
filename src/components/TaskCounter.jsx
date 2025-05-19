import useTaskStore from "../useTaskStore";

function TaskCounter() {
  const tasks = useTaskStore((state) => state.tasks);
  const incompleteCount = tasks.filter((task) => !task.completed).length;

  return (
    <div>
      <strong>{incompleteCount}</strong> tasks left
    </div>
  );
}

export default TaskCounter;
