import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import NavBar from "./components/NavBar";
import Race from "./components/Race";

const App = () => {
  return (
    <>
      <NavBar />
      <header>
        <Race />
      </header>
      <main>
        <h1 hidden>Cross The Finish line Task App</h1>

        <TaskForm />
        <TaskList />
      </main>
    </>
  );
};
export default App;
