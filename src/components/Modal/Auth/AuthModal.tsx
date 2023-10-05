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
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const viewDisplayNameMap: Record<AuthModalTypes, AuthModalTitles> = {
  [AuthModalTypes.Login]: AuthModalTitles.Login,
  [AuthModalTypes.Signup]: AuthModalTitles.Signup,
  [AuthModalTypes.ResetPassword]: AuthModalTitles.ResetPassword,
};

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState(prev => ({ ...prev, open: false }));
  };

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
