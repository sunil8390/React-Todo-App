import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GetStatus } from "../Utlis/Utlis";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "500px",
}));

const ToDoList = (props) => {
  let ToDoTasks = props.tasks
  const [TaskComplete, SetTaskComplete] = React.useState();

  const OnChangeRadioTask = (e) => {
    // alert(e.target.value, e.target.checked)
    // SetTaskComplete(e.target.value)
    props.onTaskChange(e.target.value, e.target.checked);
  };


  const handleDeleteButtonClick = (taskId) => {
    // Call a function to handle the delete action with the taskId
    props.onDeleteTask(taskId);
  };

  const handelEditButtonClick = (taskId, TaskName)=>{
    // console.log("edit", taskId, TaskName);
    props.onEditTask(taskId)
  }


  return (
    <div>
      {ToDoTasks.length > 0 && (
        <h1 className="py-3">
          Total Tasks: {ToDoTasks.length}, 
          InProcess: {" "}{ToDoTasks.filter((task) => task.status === GetStatus(1)).length}{" "}
          Completed:{" "}{ToDoTasks.filter((task) => task.status === GetStatus(2)).length}{" "}
        </h1>
      )}
      <Box sx={{ width: "100%", height: "100%" }}>
        <Stack spacing={2}>
          {ToDoTasks.map((task, index) => (
            <Item
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor:
                  task.status === GetStatus(2) ? "#82E0AA" : "#F0F8FF",
              }}
            >
              <Checkbox onChange={OnChangeRadioTask} value={task.id} />
              <p
                style={
                  task.status === GetStatus(2)
                    ? { textDecoration: "line-through", color: "red" }
                    : { color: "black" }
                }
              >
                {task.taskName}
              </p>
              {/* <p>{task.status}</p> */}

              <Button
                style={{ marginLeft: "auto" }}
                onClick={() => handelEditButtonClick(task.id, task.taskName)}
                value={task.id}
              >
                <EditIcon />
              </Button>

              <Button
                style={{ marginLeft: "0px" }}
                onClick={() => handleDeleteButtonClick(task.id)}
              >
                <DeleteIcon style={{ color: "red" }} />
              </Button>
            </Item>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default ToDoList;
