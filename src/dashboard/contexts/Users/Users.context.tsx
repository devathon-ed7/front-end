import { createContext } from 'react';
import { User } from '../../../interfaces/index.interface';
import { UsersState } from './Users.provider';

interface ContextProps extends UsersState {
  setDatagrid: (data: User[]) => void;
}

export const UsersContext = createContext({} as ContextProps);
