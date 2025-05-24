import useTaskStore from "../useTaskStore.jsx";
import styled from "styled-components";

const CircleCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: #fdfdfd;
  color: #2d2b2b;
  border-radius: 50%;
  font-family: "Brush Script MT", cursive;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-right: 2rem;
  padding: 2rem;
  border: 0.4rem solid #000000;
  outline: 0.1rem solid #fdfdfd;
`;

const TaskCounter = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const incompleteCount = tasks.filter((task) => !task.completed).length;

  return <CircleCounter>{incompleteCount}</CircleCounter>;
};

export default TaskCounter;
