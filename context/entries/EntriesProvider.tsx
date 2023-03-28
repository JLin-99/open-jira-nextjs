import { FC, PropsWithChildren, useEffect, useReducer } from "react";

import { Entry } from "@/interfaces";
import { EntriesContext, entriesReducer } from "./";
import entriesAPI from "@/apis/entriesAPI";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  useEffect(() => {
    const refreshEntries = async () => {
      const { data } = await entriesAPI.get<Entry[]>("/entries");
      dispatch({ type: "[Entry] Refresh-Data", payload: data });
    };

    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesAPI.post<Entry>("/entries", { description });
    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesAPI.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "[Entry] Entry-Updated", payload: data });
    } catch (error) {
      console.log({ error });
    }
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
