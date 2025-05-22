import useTaskStore from "../useTaskStore";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const Columns = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
`;

function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  const categories = ["morning", "afternoon", "evening"];

  return (
    <Columns>
      {categories.map((category) => (
        <Column key={category}>
          <h3 style={{ textTransform: "capitalize" }}>{category}</h3>
          <ul>
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
          </ul>
        </Column>
      ))}
    </Columns>
  );
}

export default TaskList;
