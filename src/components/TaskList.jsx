import useTaskStore from "../useTaskStore";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
