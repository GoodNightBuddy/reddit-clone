import { authModalState } from '@/src/atoms/authModalAtom';
import { auth } from '@/src/firebase/clientApp';
import { AuthModalTypes } from '@/src/types/enums';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { CgProfile } from 'react-icons/cg';
import { FaRedditSquare } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { MdOutlineLogin } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { useSetRecoilState } from 'recoil';

export type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const [signOut] = useSignOut(auth);
  const setModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor={'pointer'}
        padding={'0px 6px'}
        borderRadius={4}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex align={'center'}>
          <Flex align={'center'}>
            {user ? (
              <>
                <Icon
                  fontSize={24}
                  mr={1}
                  color='gray.300'
                  as={FaRedditSquare}
                />
                <Box
                  display={{ base: 'none', lg: 'flex' }}
                  flexDirection='column'
                  fontSize='8pt'
                  alignItems='flex-start'
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.displayName || user?.email?.split('@')[0]}
                  </Text>
                  <Flex alignItems='center'>
                    <Icon as={IoSparkles} color='brand.100' mr={1} />
                    <Text color='gray.400'>1 karma</Text>
                  </Flex>
                </Box>
              </>
            ) : (
              <Icon fontSize={24} mr={1} color='gray.300' as={VscAccount} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem
          _hover={{ bg: 'blue.500', color: 'white' }}
          fontSize={'10pt'}
          fontWeight={700}
        >
          <Flex align={'center'}>
            <Icon fontSize={20} mr={2} as={CgProfile} />
            <Text>Profile</Text>
          </Flex>
        </MenuItem>
        <MenuDivider />
        {user ? (
          <MenuItem
            _hover={{ bg: 'blue.500', color: 'white' }}
            fontSize={'10pt'}
            fontWeight={700}
            onClick={() => signOut()}
          >
            <Flex align={'center'}>
              <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
              <Text>Log out</Text>
            </Flex>
          </MenuItem>
        ) : (
          <MenuItem
            _hover={{ bg: 'blue.500', color: 'white' }}
            fontSize={'10pt'}
            fontWeight={700}
            onClick={() =>
              setModalState({
                open: true,
                type: AuthModalTypes.Login,
              })
            }
          >
            <Flex align={'center'}>
              <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
              <Text>Log in / Sign Up</Text>
            </Flex>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
