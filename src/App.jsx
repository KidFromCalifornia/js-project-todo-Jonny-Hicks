import NavBar from "./components/NavBar";
import Race from "./components/Race";
import TaskFormToggle from "./components/TaskFormToggle";

const App = () => {
  return (
    <>
      <NavBar />
      <header>
        <Race />
      </header>
      <main>
        <TaskFormToggle />
      </main>
    </>
  );
};
export default App;
