import { createContext } from 'react';
import { UsersState } from './Users.provider';
import { User } from '@/modules/users/interfaces/user.interface';

interface ContextProps extends UsersState {
  setDatagrid: (data: User[]) => void;
}

export const UsersContext = createContext({} as ContextProps);
