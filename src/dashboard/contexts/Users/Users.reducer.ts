import { User } from "@/interfaces";
import { UsersState } from "./";

type UsersActionType = { type: "[Users] - SET_DATAGRID"; payload: User[] };

export const UsersReducer = (
  state: UsersState,
  action: UsersActionType
): UsersState => {
  switch (action.type) {
    case "[Users] - SET_DATAGRID":
      return { ...state, UsersDataGrid: action.payload };

    default:
      return state;
  }
};
