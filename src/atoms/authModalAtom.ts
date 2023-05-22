import { atom } from 'recoil';
import { AuthModalTypes } from '../types/enums';

export interface AuthModalState {
  open: boolean;
  type: AuthModalTypes;
}

const defaultModalState: AuthModalState = {
  open: false,
  type: AuthModalTypes.Login,
};

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: defaultModalState,
});
