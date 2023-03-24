import { FC, useContext, useMemo } from "react";

import { List, Paper } from "@mui/material";
import { EntryListItem } from "./EntryListItem";

import { EntryStatus } from "@/interfaces";
import { EntriesContext } from "../entries";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

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
          {entriesByStatus.map((entry) => (
            <EntryListItem key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
