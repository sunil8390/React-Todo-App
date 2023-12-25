import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuid } from "uuid";
import { GetStatus } from "../Utlis/Utlis";
import { InputBase } from "@mui/material";




const ToDoCreate = (props) => {
  const [Task, setTask] = React.useState("");
  //console.log(props.editTask);
  const handleInputChange = (event) => {
    if (props.editTask) {
      props.editTask.taskName = event.target.value;
    }
    setTask(event.target.value); // Update the task state with the input value
  };

  const handleAddButtonClick = () => {

    
    props.editTask ? 
    props.onUpdateTask({
      id: uuid(),
      taskName: Task,
      status: GetStatus(1),
    })
    :
    props.onAddTask({
      id: uuid(),
      taskName: Task,
      status: GetStatus(1),
    });
    setTask("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //height: "100vh", // Set height to 100% of the viewport height
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField
        id="filled-basic"
        label="Add your task.."
        value={props.editTask ? props.editTask.taskName : Task}
        variant="outlined"
        onChange={handleInputChange}
        InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
      /> */}

      <InputBase 
      className="m-4 border-2 border-white	rounded-lg	p-2 w-full sm:w-80 "
      id="filled-basic"
      value={props.editTask ? props.editTask.taskName : Task}
      placeholder="Add your task.."
      variant="outlined"
      onChange={handleInputChange}
      style={{  color: '#fff'}}
      />

      
      {/* <Box sx={{ "& > :not(style)": { m: 0 , p: 0} }}> */}
        {/* <Fab color="primary" aria-label="add" onClick={handleAddButtonClick} >
          <AddIcon />
        </Fab> */}
      {/* </Box> */}

      <Button
        onClick={handleAddButtonClick}
        variant="contained"
        style={{ textTransform: "none", padding: "12px 0px", width: "100px" }}
      >
        <AddIcon />
        {props.editTask ? "Update" : "Add"}
      </Button>
    </Box>
  );
};
export default ToDoCreate;
