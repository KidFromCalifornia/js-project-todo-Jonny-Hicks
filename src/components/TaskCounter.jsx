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
  padding: 2rem;
  box-sizing: border-box;
  border: 0.4rem solid #000000;
  outline: 0.1rem solid #fdfdfd;
`;
const TaskCounter = () => {
  const incompleteCount = useTaskStore((state) =>
    state.tasks.reduce(
      (count, task) => (!task.completed ? count + 1 : count),
      0
    )
  );

  return (
    <CircleCounter aria-label={`you have ${incompleteCount} left`}>
      {incompleteCount}
    </CircleCounter>
  );
};

export default TaskCounter;
