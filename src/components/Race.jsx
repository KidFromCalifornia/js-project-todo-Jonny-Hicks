import styled from "styled-components";
import useTaskStore from "../useTaskStore.jsx";
import TaskCounter from "./TaskCounter";

const RaceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

const RaceCar = styled.img`
  width: 4rem;
  height: inherit;
  filter: drop-shadow(-1.7rem 0.05rem 0.5rem rgba(112, 112, 112, 0.4));

  @media (min-width: 450px) {
    width: 6rem;
    height: inherit;
  }
  @media (min-width: 850px) {
    width: 12rem;
    height: inherit;
  }
`;

const MovingCar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: ${({ $progress }) => $progress}%;
  transition: left 0.5s;
`;

const Flag = styled.span`
  position: absolute;
  top: 2rem;
  right: 1rem;
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
      <Flag
        role="img"
        aria-label="Checkered flag indicating all tasks completed"
        aria-live="polite"
      >
        🏁
      </Flag>
    );
  } else if (incompleteCount === 1 && total > 1) {
    display = (
      <Flag
        role="img"
        aria-live="polite"
        aria-label=" white flag indicating one task left"
      >
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
        <RaceCar
          src="/race-car.png"
          alt="Race car moving for each task finished "
          loading="lazy"
          aria-label={`Race car moving ${completed} out of ${total} tasks completed`}
        />
      </MovingCar>
      {display}
    </RaceContainer>
  );
};

export default Race;
