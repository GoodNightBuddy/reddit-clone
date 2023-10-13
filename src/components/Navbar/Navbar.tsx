/* eslint-disable jsx-a11y/alt-text */
import { auth } from '@/src/firebase/clientApp';
import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Directory from './Directory/Directory';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex
      bg={'white'}
      h={'44px'}
      p={'6px 12px'}
      justify={{ md: 'space-between' }}
    >
      <Flex
        align={'center'}
        w={{ base: 10, md: 'auto' }}
        mr={{ base: 0, md: 2 }}
      >
        <Image src='images/redditFace.svg' h={'30px'} />
        <Image
          src='images/redditText.svg'
          h={'46px'}
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      <Directory />
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
