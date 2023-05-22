import { authModalState } from '@/src/atoms/authModalAtom';
import { Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import React from 'react';
import { AuthModalTypes } from '@/src/types/enums';

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant={'outline'}
        h={'28px'}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() =>
          setAuthModalState({ open: true, type: AuthModalTypes.Login })
        }
      >
        Log In
      </Button>
      <Button
        h={'28px'}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() =>
          setAuthModalState({ open: true, type: AuthModalTypes.Signup })
        }
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;
