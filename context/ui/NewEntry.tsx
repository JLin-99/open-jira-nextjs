import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveAltOutlined";

export const NewEntry = () => {
  return (
    <>
      <Button startIcon={<AddIcon />} fullWidth variant="outlined">
        Add Task
      </Button>

      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        autoFocus
        multiline
        label="New Task"
        helperText="Enter a value"
      />

      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Cancel</Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
      </Box>
    </>
  );
};
