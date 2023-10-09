import { authModalState } from '@/src/atoms/authModalAtom';
import { auth } from '@/src/firebase/clientApp';
import { AuthModalTypes } from '@/src/types/enums';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
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
import { MdOutlineLogin } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { useSetRecoilState } from 'recoil';

type UserMenuProps = {
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
        {user ? (
          <Flex align={'center'}>
            <Flex align={'center'}>
              <Icon fontSize={24} mr={1} color='gray.300' as={FaRedditSquare} />
              <ChevronDownIcon />
            </Flex>
          </Flex>
        ) : (
          <Icon fontSize={24} mr={1} color='gray.300' as={VscAccount} />
        )}
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
