import { atom } from 'recoil';
import { AuthModalTypes } from '../types/enums';

export interface AuthModalState {
  open: boolean;
  view: AuthModalTypes;
}

const defaultModalState: AuthModalState = {
  open: false,
  view: AuthModalTypes.Login,
};

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: defaultModalState,
});
