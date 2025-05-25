import useTaskStore from "../useTaskStore.jsx";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark);
  border-radius: 2rem;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
`;

const TasklistGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  text-indent: 0;
  text-align: left;

  p {
    font-family: "robik", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    color: var(--color-text);
  }
`;

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);

  const categories = ["morning", "afternoon", "evening"];

  return (
    <Columns>
      {categories.map((category) => (
        <Column key={category}>
          <h2 style={{ textTransform: "capitalize", marginBottom: " 1rem" }}>
            {category}
          </h2>
          <TasklistGroup>
            {tasks.filter((task) => task.category === category).length === 0 ? (
              <>
                <img
                  src="/PitStop.png"
                  alt={`No tasks for ${category}, so take a rest`}
                  width="100%"
                  height="100%"
                  style={{ width: "100%", height: "auto" }}
                  aria-label=" No tasks for the category, take a rest"
                  loading="lazy"
                />
                <p style={{ textAlign: "center" }}>
                  No tasks for the {category}, Take a Rest!
                </p>
              </>
            ) : (
              tasks
                .filter((task) => task.category === category)
                .map((task) => <TaskItem key={task.id} task={task} />)
            )}
          </TasklistGroup>
        </Column>
      ))}
    </Columns>
  );
};

export default TaskList;
