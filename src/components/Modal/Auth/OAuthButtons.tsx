import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const OAuthButtons: React.FC = () => {
  return (
    <Flex w={'100%'} flexDir={'column'} mb={'4'}>
      <Button variant={'oauth'}>
        <Image
          src='/images/googlelogo.png'
          h={'20px'}
          alt='google logo'
          mr={'4'}
        />
        Continue with Gogl
      </Button>
    </Flex>
  );
};

export default OAuthButtons;
