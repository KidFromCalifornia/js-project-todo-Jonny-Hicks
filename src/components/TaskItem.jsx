import useTaskStore from "../useTaskStore.jsx";
import styled from "styled-components";

const ListItems = styled.li`
  text-align: left;
  text-transform: capitalize;
  font-family: "robik", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  flex-direction: column;
  display: flex;
  justify-content: left;
  margin-bottom: 1rem;
  gap: 0.5rem;
  justify-content: center;
`;

const TaskButton = styled.button`
  padding: 0.25rem 0.75rem;
  color: var(--color-dark-solid);
  background-color: var(--color-text);
  border: none;
  border-radius: 2rem;

  align-self: flex-end;
`;
const TaskText = styled.span`
  padding-right: 1rem;
`;

const TaskItem = ({ task }) => {
  const toggleTaskCompleted = useTaskStore(
    (state) => state.toggleTaskCompleted
  );

  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <ListItems>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompleted(task.id)}
          aria-label={`Mark ${task.text} as ${
            task.completed ? "incomplete" : "complete"
          }`}
        />
        <TaskText
          style={{
            paddingLeft: "1rem",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
        </TaskText>
      </label>
      <TaskButton
        onClick={() => removeTask(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        Remove
      </TaskButton>
    </ListItems>
  );
};

export default TaskItem;
