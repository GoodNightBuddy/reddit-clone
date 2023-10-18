import { authModalState } from '@/src/atoms/authModalAtom';
import { auth } from '@/src/firebase/clientApp';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { TiHome } from 'react-icons/ti';
import { useSetRecoilState } from 'recoil';
import { UserMenuProps } from '../RightContent/UserMenu';
import Communities from './Communities';

const Directory: React.FC<UserMenuProps> = ({ user }) => {
  const [signOut] = useSignOut(auth);
  const setModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor={'pointer'}
        padding={'0px 6px'}
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex
          align={'center'}
          justify={'space-between'}
          width={{ base: 'auto', lg: '200px' }}
        >
          <Flex align={'center'}>
            <Icon as={TiHome} fontSize={24} mr={{ base: 1, md: 2 }} />
            <Text
              fontWeight={600}
              fontSize='10pt'
              display={{ base: 'none', md: 'unset' }}
            >
              Home
            </Text>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};

export default Directory;
