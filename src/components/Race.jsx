import styled from "styled-components";
import useTaskStore from "../useTaskStore";
import TaskCounter from "./TaskCounter";

const RaceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

const RaceCar = styled.img`
  width: 12rem;
  height: 7rem;
`;

const MovingCar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: ${({ $progress }) => $progress}%;
  transition: left 0.5s;
`;

const Flag = styled.span`
  position: absolute;
  top: 1rem;
  right: 10px;
  font-size: 5rem;
  z-index: 2;
`;

const Race = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const total = tasks.length || 1;
  const completed = tasks.filter((task) => task.completed).length;
  const incompleteCount = total - completed;
  const progress = (completed / total) * 90; // 0% to 90%

  let display;
  if (completed === total && total > 0) {
    display = (
      <Flag role="img" aria-label="Checkered flag">
        🏁
      </Flag>
    );
  } else if (incompleteCount === 1 && total > 1) {
    display = (
      <Flag role="img" aria-label="White flag">
        🏳️
      </Flag>
    );
  } else {
    display = (
      <Flag>
        <TaskCounter />
      </Flag>
    );
  }

  return (
    <RaceContainer>
      <MovingCar $progress={progress}>
        <RaceCar src="/race-car.png" alt="Race car" />
      </MovingCar>
      {display}
    </RaceContainer>
  );
};

export default Race;
