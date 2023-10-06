import { authModalState } from '@/src/atoms/authModalAtom';
import { AuthModalTitles, AuthModalTypes } from '@/src/types/enums';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant={'outline'}
        mr={2}
        h={'28px'}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() =>
          setAuthModalState({ open: true, type: AuthModalTypes.Login })
        }
      >
        {AuthModalTitles.Login}
      </Button>
      <Button
        mr={2}
        h={'28px'}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() =>
          setAuthModalState({ open: true, type: AuthModalTypes.Signup })
        }
      >
        {AuthModalTitles.Signup}
      </Button>
    </>
  );
};

export default AuthButtons;
