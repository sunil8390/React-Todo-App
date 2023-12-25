import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GetStatus } from "../Utlis/Utlis";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "400px",
}));

const ToDoList = (props) => {
  let ToDoTasks = props.tasks;
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

  const handelEditButtonClick = (taskId, TaskName) => {
    // console.log("edit", taskId, TaskName);
    props.onEditTask(taskId);
  };

  return (
    <div>
      {ToDoTasks.length > 0 && (
        <h1 className="py-3">
          Total Tasks: {ToDoTasks.length}, InProcess:{" "}
          {ToDoTasks.filter((task) => task.status === GetStatus(1)).length}{" "}
          Completed:{" "}
          {ToDoTasks.filter((task) => task.status === GetStatus(2)).length}{" "}
        </h1>
      )}
      <Box>
        <Stack spacing={2}>
          {ToDoTasks.map((task, index) => (
            <Item
              key={index}
              className="m-4  justify-between items-center  border-2 border-white	rounded-lg	p-2 w-full sm:w-80  text-wrap"
              style={{
                backgroundColor:
                  task.status === GetStatus(2) ? "#82E0AA" : "#F0F8FF",
              }}
            >
              <Grid container spacing={0} className="items-center">
                <Grid item xs={2}>
                  <Checkbox onChange={OnChangeRadioTask} value={task.id} />
                </Grid>
                <Grid item xs={8}>
                  <p
                    style={{
                      wordWrap: "break-word",
                      textDecoration:
                        task.status === GetStatus(2) ? "line-through" : "none",
                      color: task.status === GetStatus(2) ? "red" : "black",
                    }}
                  >
                    {task.taskName}
                  </p>
                </Grid>
                <Grid item xs={2} className="flex">
                  {/* <Button style={{ marginLeft: "auto" }} onClick={() => handelEditButtonClick(task.id, task.taskName) } value={task.id} > <EditIcon className="size-1"/> </Button>
                  <Button style={{ marginLeft: "0px" }} onClick={() => handleDeleteButtonClick(task.id)} > <DeleteIcon style={{ color: "red" }} /> </Button> */}
                  <EditIcon style={{ marginLeft: "auto" }} onClick={() => handelEditButtonClick(task.id, task.taskName) } value={task.id} className="size-1"/> 
                  <DeleteIcon style={{ marginLeft: "0px" ,color: "red" }} onClick={() => handleDeleteButtonClick(task.id)}  /> 
                </Grid>
              </Grid>

              {/* <p>{task.status}</p> */}
            </Item>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default ToDoList;
