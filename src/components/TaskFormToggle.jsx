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
  transition: transform 0.2s;

  &:active {
    transform: scale(1.05);
  }
`;

const GoText = styled.p`
  position: absolute;
  font-size: 5rem;
  color: white;
  top: 60%;
  left: 40%;
  text-align: center;
  font-family: "Rubik Mono One", monospace;
  transform: skewX(40deg);
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 0.1rem 0.1rem 0.2rem #000000;
  margin: 0;
  padding: 0;
  letter-spacing: 0.5rem;
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
