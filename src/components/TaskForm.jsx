import { useState } from "react";
import useTaskStore from "../useTaskStore";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 0;
  border-radius: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  background-color: #faebd7;
  color: #2d2b2b;
  border-radius: 2rem;
  font-family: "robik ", sans-serif;
  outline: white 0.1rem solid;
  border: none;
  width: 60%;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #2d2b2b;
  background-color: #faebd7;
  border: none;
  border-radius: 2rem;
  width: 10%;
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
      <Button type="submit" onClick={handleSubmit("morning")}>
        Morning
      </Button>
      <Button type="submit" onClick={handleSubmit("afternoon")}>
        Afternoon
      </Button>
      <Button type="submit" onClick={handleSubmit("evening")}>
        Evening
      </Button>
    </Form>
  );
};

export default TaskForm;
