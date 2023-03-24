import { createContext, Dispatch } from "react";
import { UIActionType } from "./uiReducer";

interface ContextProps {
  sidemenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
