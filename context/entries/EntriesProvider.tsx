import { FC, PropsWithChildren, useReducer } from "react";

import { v4 as uuid } from "uuid";

import { Entry } from "@/interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuid(),
      description:
        "Pending: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos alias veniam unde voluptates ipsa nam.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuid(),
      description: "In Progress: Eos alias veniam unde voluptates ipsa nam.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuid(),
      description:
        "Finished: Vamet, consectetur adipisicing elit. Eos alias veniam unde voluptates ipsa nam.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuid(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Entry-Updated", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
