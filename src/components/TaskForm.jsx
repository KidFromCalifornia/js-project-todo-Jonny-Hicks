import { useState } from "react";
import useTaskStore from "../useTaskStore";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 0 2px 8px var(--color-dark),
    inset 0 -2px 8px var(--color-dark);
  padding: 1rem;
  border-radius: 2rem;
  flex-wrap: wrap;
  width: 100%;

  background-color: var(--color-background);

  @media (min-width: 850px) {
    margin-top: 2rem;
    gap: 2rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  background-color: var(--color-text);
  border-radius: 2rem;
  outline: none;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;

  [type="text"] {
    text-align: center;
    color: var(--color-dark);
    font-family: "robik ", sans-serif;
    align-self: center;
  }

  @media (min-width: 850px) {
    width: 55%;
    margin-bottom: 0rem;
  }
`;
const FormButton = styled.button`
  padding: 0.35rem 0.5rem;
  color: var(--color-dark-solid);
  background-color: var(--color-text);
  border: none;
  border-radius: 2rem;
  font-family: "robik", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  gap: 1rem;
  min-width: 4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:active {
    background-color: #eb2929;
    color: var(--color-text);
    transform: scale(0.95);
    box-shadow: inset 0.1rem 0.2rem 0.2rem 0.1rem var(--color-dark);
  }
  @media (min-width: 850px) {
    padding: 0.35rem 1rem;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 95%;
  gap: 0.2rem;

  @media (min-width: 850px) {
    width: 40%;
    width: 100;
    gap: 1rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const TaskForm = () => {
  const [inputValue, setInputValue] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (category) => (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addTask({
      id: Date.now(),
      text: inputValue,
      completed: false,
      category,
    });
    setInputValue("");
  };

  return (
    <Form>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be finished?"
        aria-label="Add a new task"
      />
      <ButtonContainer>
        <FormButton
          type="submit"
          aria-label=" click to set for morning"
          onClick={handleSubmit("morning")}
        >
          Morning
        </FormButton>
        <FormButton
          type="submit"
          aria-label=" click to set for afternoon"
          onClick={handleSubmit("afternoon")}
        >
          Afternoon
        </FormButton>
        <FormButton
          type="submit"
          aria-label=" click to set for evening"
          onClick={handleSubmit("evening")}
        >
          Evening
        </FormButton>
      </ButtonContainer>
    </Form>
  );
};

export default TaskForm;
