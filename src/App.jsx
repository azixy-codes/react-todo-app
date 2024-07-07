import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form";
import { Tasks } from "./Components/Tasks";

function generateId() {
  return Math.floor(Math.random() * 100);
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTasks((tasks) =>
      tasks.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTask = (id) =>
    setTasks((tasks) => tasks.filter((t) => t.id !== id));

  return (
    <div className="container">
      <h1 className="heading">My TODO App</h1>
      <Form
        inputValue={input}
        onInputChange={setInput}
        onButtonClick={handleSubmit}
      />

      <Tasks tasks={tasks} onRemoveButtonClick={(id) => removeTask(id)} />
    </div>
  );
}

export default App;
