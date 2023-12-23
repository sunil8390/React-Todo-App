import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuid } from "uuid";
import { GetStatus } from "../Utlis/Utlis";

const ToDoCreate = ({ onAddTask }) => {

    const [Task, setTask] = React.useState("");


    const handleInputChange = (event) => {
        setTask(event.target.value); // Update the task state with the input value
    }

    const handleAddButtonClick = () => {
        onAddTask({
          id: uuid(),
          taskName: Task,
          status: GetStatus(1)
        }); 
        setTask(""); 
    }


  return (
    
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //height: "100vh", // Set height to 100% of the viewport height
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        label="Add your task.."
        value={Task}
        variant="outlined"
        onChange={handleInputChange}
        InputProps={{ style: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'white'} }}
      />

      <Button onClick={handleAddButtonClick} variant="contained" style={{ textTransform: "none", padding: "16px 0px", width: "100px" }}><AddIcon />Add</Button>
    </Box>

  );
};
export default ToDoCreate;
