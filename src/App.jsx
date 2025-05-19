import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskCounter from "./components/TaskCounter";

const App = () => {
  return (
    <section>
      <h1 hidden>Cross The Finish line Task App</h1>
      <TaskCounter />
      <TaskForm />
      <TaskList />
    </section>
  );
};

export default App;
