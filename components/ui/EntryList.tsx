import { DragEvent, FC, useContext, useMemo } from "react";

import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";

import { EntryStatus } from "@/interfaces";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import styles from "@/styles/EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
  };

  const onDropEntry = (e: DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;

    updateEntry(entry);
    endDragging();
  };

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop}>
      <Paper
        sx={{
          height: "calc(100vh - 240px)",
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
          border: "1px solid transparent",
        }}
        className={isDragging ? styles.dragging : ""}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
