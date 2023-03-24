import { List, Paper } from "@mui/material";
import { EntryListItem } from "./EntryListItem";

export const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 200px)",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "3px",
            bgcolor: "#454545",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#4a148c",
            border: "7px none #fffff",
            borderRadius: "10px",
          },
          background: "#1c1d20",
          padding: "1px 7px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntryListItem />
          <EntryListItem />
          <EntryListItem />
          <EntryListItem />
          <EntryListItem />
        </List>
      </Paper>
    </div>
  );
};
