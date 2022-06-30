import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>to do list</h1>
      <Todo text="task1" />
      <Todo text="task2" />
      <Todo text="task3" />
    </div>
  );
}

export default App;
