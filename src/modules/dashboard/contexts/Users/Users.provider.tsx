import { FC, useReducer } from "react";
import { UsersContext, UsersReducer } from "./";
import { User } from "@/modules/users/interfaces/user.interface";

export interface UsersState {
  UsersDataGrid: User[];
}

const INITIAL_STATE: UsersState = {
  UsersDataGrid: [],
};

interface Props {
  children: React.ReactNode;
}

export const UsersProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, INITIAL_STATE);

  const setDatagrid = (data: User[]) => {
    dispatch({ type: "[Users] - SET_DATAGRID", payload: data });
  };

  return (
    <UsersContext.Provider value={{ ...state, setDatagrid }}>
      {children}
    </UsersContext.Provider>
  );
};
