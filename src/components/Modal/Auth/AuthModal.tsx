import { authModalState } from '@/src/atoms/authModalAtom';
import { AuthModalTitles, AuthModalTypes } from '@/src/types/enums';
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/clientApp';

const viewDisplayNameMap: Record<AuthModalTypes, AuthModalTitles> = {
  [AuthModalTypes.Login]: AuthModalTitles.Login,
  [AuthModalTypes.Signup]: AuthModalTitles.Signup,
  [AuthModalTypes.ResetPassword]: AuthModalTitles.ResetPassword,
};

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = useCallback(() => {
    setModalState(prev => ({ ...prev, open: false }));
  }, [setModalState]);

  useEffect(() => {
    if (user) handleClose();
  }, [handleClose, user]);

  const currentViewDisplayName = viewDisplayNameMap[modalState.type];

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>
            {currentViewDisplayName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            pb={6}
          >
            <Flex
              direction={'column'}
              align={'center'}
              justify={'center'}
              width={'70%'}
            >
              <OAuthButtons />
              <Text color={'gray.500'} mb={4}>
                OR
              </Text>
              <AuthInputs />
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
