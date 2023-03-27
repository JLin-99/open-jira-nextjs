import { useContext, useState } from "react";

import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveAltOutlined";

import { EntriesContext } from "../entries";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);

  const onSave = () => {
    if (!inputValue) return;

    addNewEntry(inputValue);
    setInputValue("");
    setTouched(false);
    setIsAdding(false);
  };

  return isAdding ? (
    <>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        autoFocus
        multiline
        label="New Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        helperText={inputValue.length <= 0 && touched && "Enter a value"}
        error={inputValue.length <= 0 && touched}
        onBlur={() => setTouched(true)}
      />

      <Box display="flex" justifyContent="space-between">
        <Button variant="text" onClick={() => setIsAdding(false)}>
          Cancel
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
          onClick={onSave}
        >
          Save
        </Button>
      </Box>
    </>
  ) : (
    <Button
      startIcon={<AddIcon />}
      fullWidth
      variant="outlined"
      onClick={() => setIsAdding(true)}
    >
      Add Task
    </Button>
  );
};
