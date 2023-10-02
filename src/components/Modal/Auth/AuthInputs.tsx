import { authModalState } from '@/src/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import React from 'react';
import { AuthModalTypes } from '@/src/types/enums';
import Login from './Login';
import SignUp from './SignUp';

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);

  return (
    <Flex>
      {modalState.type === AuthModalTypes.Login && <Login />}
      {modalState.type === AuthModalTypes.Signup && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;
