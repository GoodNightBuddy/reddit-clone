import { auth } from '@/src/firebase/clientApp';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex w={'100%'} flexDir={'column'} mb={'4'}>
      <Button variant={'oauth'} onClick={() => signInWithGoogle()}>
        <Image
          src='/images/googlelogo.png'
          h={'20px'}
          alt='google logo'
          mr={'4'}
        />
        Continue with Gogl
      </Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};

export default OAuthButtons;
