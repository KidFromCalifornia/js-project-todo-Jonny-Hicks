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
        <h1 hidden>Cross off The Tasks The Finish! </h1>
        <TaskFormToggle />
      </main>
    </>
  );
};
export default App;
