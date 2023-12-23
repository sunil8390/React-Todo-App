import React, {useState} from "react";
import ToDoCreate from "./ToDoCreate";
import ToDoList from "./ToDoList";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { GetStatus } from "../Utlis/Utlis";

const ToDoMain = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskChange = (taskId, checked) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: checked? GetStatus(2): GetStatus(1) } : task
      );
    });
  };
  
  const handelTaskDelete = (taskId) => {
    // Use setTasks to update the state by filtering out the task with the specified ID
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
       // justifyContent: "center",
        minHeight: "100vh", // Set minimum height to the full viewport height
        paddingTop: "0px"
      }}
    >
      <h1 className="text-3xl font-bold text-sky-50  py-5 pl-2">
        <PlaylistAddCheckIcon/>TODO
      </h1>
      <ToDoCreate onAddTask={addTask}  />
      <ToDoList tasks={tasks} onTaskChange={handleTaskChange} onDeleteTask={handelTaskDelete}/>
    </div>
  );
};

export default ToDoMain;
