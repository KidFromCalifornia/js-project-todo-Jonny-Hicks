import { useState } from "react";
import TaskForm from "./TaskForm";
import styled from "styled-components";
import TaskList from "./TaskList";

const StartingLineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StartingLine = styled.img`
  width: 50%;
  height: auto;
  transition: transform 0.5s;
  padding-top: 7rem;

  &:active {
    transform: scale(1.05);
  }
`;

function TaskFormToggle() {
  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return (
      <StartingLineWrapper onClick={() => setShowForm(true)}>
        <StartingLine src="/Start.svg" alt="Click to start your Task list." />
      </StartingLineWrapper>
    );
  }

  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default TaskFormToggle;
